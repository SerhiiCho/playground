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
        this.drawShooting()
    }

    public shoot(enemy: Enemy, tower: Tower): void {
        const currentTime = this.image.scene.time.now
        const timeDiff = currentTime - this.lastShotTime
        const canShoot = timeDiff >= this.shotDelay

        if (this.isShooting || !enemy.isAlive() || !canShoot) {
            return
        }

        console.log('shooting')
        this.lastShotTime = currentTime

        this.image.setPosition(tower.sprite.x, tower.sprite.y)
        this.image.setVisible(true)
        this.image.scene.physics.moveToObject(this.image, enemy.sprite, 1000)
        this.isShooting = true

        const overlap = this.image.scene.physics.add.overlap(this.image, enemy.sprite, () => {
            if (!enemy.isAlive()) {
                return
            }

            enemy.hitEnemy(this.damage)
            this.image.setVisible(false)
            this.isShooting = false
            overlap.destroy()
        })
    }

    private drawShooting(): void {
        //
    }
}