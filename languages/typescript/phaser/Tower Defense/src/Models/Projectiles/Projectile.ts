import type { SoundKey } from '@/types'
import Enemy from '@/Models/Enemy/Enemy'
import Tower from '@/Models/Tower/Tower'

export default class Projectile {
    public isShooting: boolean = false
    private lastShotTime: number = 0

    public constructor(
        private image: Phaser.GameObjects.Image,
        private shotDelay: number,
        private damage: number,
        private flySound: SoundKey,
        private hitSound: SoundKey,
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

        this.alignProjectile(enemy)

        if (this.isOutOfBound()) {
            this.isShooting = false
            this.image.setVisible(false)
        }

        if (this.isShooting || !enemy.isAlive() || !canShoot) {
            return
        }

        this.image.scene.sound.play(this.flySound, { volume: 0.1 })
        this.lastShotTime = currentTime

        this.image.setPosition(tower.sprite.x, tower.sprite.y - tower.sprite.height / 3)
        this.image.setVisible(true)
        this.image.scene.physics.moveToObject(this.image, enemy, 800)
        this.isShooting = true

        const overlap = this.image.scene.physics.add.overlap(this.image, enemy, () => {
            if (!enemy.isAlive()) {
                return
            }

            this.image.scene.sound.play(this.hitSound, { volume: 1.1 })
            this.isShooting = false
            this.image.setVisible(false)

            // stop the projectile
            this.image.scene.physics.moveToObject(this.image, enemy, 0)

            enemy.hitEnemy(this.damage)

            overlap.destroy()
        })
    }

    private isOutOfBound(): boolean {
        const { width, height } = this.image.scene.game.canvas
        return this.image.y < 0 || this.image.y > height || this.image.x < 0 || this.image.x > width
    }

    private alignProjectile(enemy: Enemy): void {
        if (this.isOutOfBound()) {
            return
        }

        const angle = Phaser.Math.Angle.Between(this.image.x, this.image.y, enemy.x, enemy.y)
        this.image.setRotation(angle + 44.7)
    }
}