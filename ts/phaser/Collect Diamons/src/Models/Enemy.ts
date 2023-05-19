import Phaser from 'phaser'
import type Position from '@/Models/Position'

export default class {
    public sprite: Phaser.GameObjects.Sprite
    private speed: number = 1

    constructor(sprite: Phaser.GameObjects.Sprite) {
        this.sprite = sprite
    }

    public create(position: Position): void {
        this.sprite.setPosition(position.x, position.y)
        this.sprite.setInteractive()
    }

    public update(playerPosition: Position): void {
        this.moveTowardsPlayer(playerPosition)
    }

    private moveTowardsPlayer(playerPosition: Position): void {
        if (this.sprite.x < playerPosition.x) {
            this.sprite.x += this.speed
        } else if (this.sprite.x > playerPosition.x) {
            this.sprite.x -= this.speed
        }

        if (this.sprite.y < playerPosition.y) {
            this.sprite.y += this.speed
        } else if (this.sprite.y > playerPosition.y) {
            this.sprite.y -= this.speed
        }
    }
}