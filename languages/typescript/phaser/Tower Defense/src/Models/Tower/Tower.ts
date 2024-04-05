import Phaser from 'phaser'
import Enemy from '@/Models/Enemy/Enemy'
import Projectile from '@/Models/Projectiles/Projectile'
import GameScene from '@/Scenes/GameScene'
import { SpriteKey } from '@/types'

export default class Tower extends Phaser.GameObjects.Sprite {
    constructor(
        public readonly scene: GameScene,
        public readonly x: number,
        public readonly y: number,
        public readonly spriteKey: SpriteKey,
        public readonly enemies: Enemy[],
        public readonly projectile: Projectile,
        public readonly range: number,
        public readonly price: number,
    ) {
        super(scene, x, y, spriteKey)
    }

    public create(): void {
        this.setPosition(this.x, this.y)
        this.setInteractive()
        this.scene.add.sprite(this.x, this.y, this.spriteKey)
    }

    public update(): void {
        this.shoot()
    }

    private shoot(): void {
        const targetEnemy = this.getTargetEnemy()

        if (!targetEnemy) {
            return
        }

        this.projectile.shoot(targetEnemy, this)
    }

    private getTargetEnemy(): Enemy | null {
        for (const enemy of this.enemies) {
            if (!enemy.isAlive()) {
                continue
            }

            const distance = Phaser.Math.Distance.Between(this.x, this.y, enemy.x, enemy.y)

            if (distance <= this.range) {
                return enemy
            }
        }

        return null
    }
}