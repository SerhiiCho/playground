import type { ImageKey, SoundKey } from '@/types'
import Enemy from '@/Models/Enemy/Enemy'
import Tower from '@/Models/Tower/Tower'
import GameScene from '@/Scenes/GameScene'

export default class Projectile extends Phaser.GameObjects.Image {
    public isShooting: boolean = false
    private lastShotTime: number = 0

    public constructor(
        public readonly scene: GameScene,
        public x: number,
        public y: number,
        public readonly imageKey: ImageKey,
        public readonly shotDelay: number,
        public readonly damage: number,
        public readonly flySound: SoundKey,
        public readonly hitSound: SoundKey,
    ) {
        super(scene, x, y, imageKey)
    }

    public create(): void {
        this.setPosition(this.x, this.y)
        this.setInteractive()
        this.setDepth(1)
        this.setVisible(false)

        this.scene.physics.world.enable(this)
        this.scene.add.existing(this)
    }

    public shoot(enemy: Enemy, tower: Tower): void {
        const currentTime = this.scene.time.now
        const timeDiff = currentTime - this.lastShotTime
        const canShoot = timeDiff >= this.shotDelay

        this.alignProjectile(enemy)

        if (this.isOutOfBound()) {
            this.isShooting = false
            this.setVisible(false)
            return
        }

        if (this.isShooting || !enemy.isAlive() || !canShoot) {
            return
        }

        this.setVisible(true)
        this.scene.sound.play(this.flySound, { volume: 0.1 })
        this.lastShotTime = currentTime

        this.setPosition(tower.x, tower.y - tower.height / 3)

        this.scene.physics.moveToObject(this, enemy, 800)
        this.isShooting = true

        const overlap = this.scene.physics.add.overlap(this, enemy, () => {
            if (!enemy.isAlive()) {
                return
            }

            this.scene.sound.play(this.hitSound, { volume: 1.1 })
            this.isShooting = false

            // stop the projectile
            this.scene.physics.moveToObject(this, enemy, 0)
            this.setVisible(false)

            enemy.hitEnemy(this.damage)

            overlap.destroy()
        })
    }

    private isOutOfBound(): boolean {
        const { width, height } = this.scene.game.canvas
        return this.y < 0 || this.y > height || this.x < 0 || this.x > width
    }

    private alignProjectile(enemy: Enemy): void {
        if (this.isOutOfBound()) {
            return
        }

        const angle = Phaser.Math.Angle.Between(this.x, this.y, enemy.x, enemy.y)
        this.setRotation(angle + 44.7)
    }
}