import Enemy from '@/Models/Enemy/Enemy'
import Tower from '@/Models/Tower/Tower'

export default class Projectile {
    private isShooting: boolean = false
    private lastShotTime: number = 0

    public constructor(
        private image: Phaser.GameObjects.Image,
        private shotDelay: number,
        private damage: number,
    ) {
    }

    public create(x: number, y: number): void {
        this.image.setPosition(x, y)
        this.image.setInteractive()
        this.image.setVisible(false)
        this.image.scene.physics.add.existing(this.image)
    }

    public update(): void {
    }

    public shoot(enemy: Enemy, tower: Tower): void {
        const currentTime = this.image.scene.time.now
        const timeDiff = currentTime - this.lastShotTime
        const canShoot = timeDiff >= this.shotDelay

        if (this.isShooting || !enemy.isAlive() || !canShoot) {
            return
        }

        this.alignProjectile(enemy)
        this.image.scene.sound.play('arrowFlySound', { volume: 0.1 })
        this.lastShotTime = currentTime

        this.image.setPosition(tower.sprite.x, tower.sprite.y - tower.sprite.height / 3)
        this.image.setVisible(true)
        this.image.scene.physics.moveToObject(this.image, enemy.sprite, 800)
        this.isShooting = true

        const overlap = this.image.scene.physics.add.overlap(this.image, enemy.sprite, () => {
            if (!enemy.isAlive()) {
                return
            }

            this.image.scene.sound.play('arrowHitSound', { volume: 1.1 })
            enemy.hitEnemy(this.damage)
            this.image.setVisible(false)
            this.isShooting = false
            overlap.destroy()
        })
    }

    private alignProjectile(enemy: Enemy): void {
        const angle = Phaser.Math.Angle.Between(this.image.x, this.image.y, enemy.sprite.x, enemy.sprite.y)
        this.image.setRotation(angle + 44.7)
    }
}