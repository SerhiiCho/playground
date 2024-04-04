import Phaser from 'phaser'
import Enemy from '@/Models/Enemy/Enemy'
import Projectile from '@/Models/Projectiles/Projectile'

export default class Tower {
    constructor(
        public sprite: Phaser.GameObjects.Sprite,
        private range: number,
        private enemies: Enemy[],
        private projectile: Projectile
    ) {
    }

    public create(x: number, y: number): void {
        this.sprite.setPosition(x, y)
        this.sprite.setInteractive()
    }

    public update(): void {
        this.projectile.update()
        this.shoot()
    }

    private shoot(): void {
        const targetEnemy = this.getTargetEnemy()

        if (!targetEnemy) {
            return
        }

        if (targetEnemy.isAlive()) {
            this.projectile.shoot(targetEnemy, this)
        }

        // if enemy is dead, do nothing

        // if enemy is alive, shoot
    }

    private getTargetEnemy(): Enemy | null {
        for (const enemy of this.enemies) {
            const distance = Phaser.Math.Distance.Between(
                this.sprite.x,
                this.sprite.y,
                enemy.sprite.x,
                enemy.sprite.y,
            )

            if (distance <= this.range) {
                return enemy
            }
        }

        return null
    }
}