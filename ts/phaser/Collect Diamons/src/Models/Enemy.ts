import Phaser from 'phaser'
import type Position from '@/Models/Position'

export default class {
    private speed: number = 1

    constructor(public sprite: Phaser.GameObjects.Sprite) {
    }

    public create(position: Position): void {
        this.sprite.setPosition(position.x, position.y)
        this.sprite.setInteractive()
    }

    public update(playerPosition: Position): void {
        this.moveTowardsPlayer(playerPosition)
    }

    public isCollidingWith(object: Phaser.GameObjects.Sprite): boolean {
        const distance = Phaser.Math.Distance.Between(
            this.sprite.x,
            this.sprite.y,
            object.x,
            object.y
        )

        return distance < 20
    }

    private moveTowardsPlayer(playerPosition: Position): void {
        if (this.sprite.x < playerPosition.x) {
            this.sprite.x += this.speed
            this.sprite.flipX = true
        } else if (this.sprite.x > playerPosition.x) {
            this.sprite.x -= this.speed
            this.sprite.flipX = false
        }

        if (this.sprite.y < playerPosition.y) {
            this.sprite.y += this.speed
        } else if (this.sprite.y > playerPosition.y) {
            this.sprite.y -= this.speed
        }
    }
}