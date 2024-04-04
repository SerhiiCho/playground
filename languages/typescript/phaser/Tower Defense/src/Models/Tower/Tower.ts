import Phaser from 'phaser'
import Enemy from '@/Models/Enemy/Enemy'

export default class Tower {
    constructor(
        private sprite: Phaser.GameObjects.Sprite,
        private range: number,
        private enemies: Enemy[],
    ) {
    }

    public create(x: number, y: number): void {
        this.sprite.setPosition(x, y)
        this.sprite.setInteractive()
    }

    public update(): void {
        this.shoot()
    }

    private shoot(): void {
        if (!this.isEnemyInRange()) {
            return
        }

        // shoot
        console.log('shoot!!!')

        // if enemy is dead, do nothing

        // if enemy is alive, shoot
    }

    private isEnemyInRange(): boolean {
        for (const enemy of this.enemies) {
            const distance = Phaser.Math.Distance.Between(
                this.sprite.x,
                this.sprite.y,
                enemy.sprite.x,
                enemy.sprite.y,
            )

            if (distance <= this.range) {
                return true
            }
        }

        return false
    }
}