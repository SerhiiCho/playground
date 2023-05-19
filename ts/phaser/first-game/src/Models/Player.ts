import type { KeysPressed } from '../types'
import Position from './Position'
import Phaser from 'phaser'

export default class {
    public sprite: Phaser.GameObjects.Sprite
    private speed: number = 3

    constructor(sprite: Phaser.GameObjects.Sprite) {
        this.sprite = sprite
    }

    public create(position: Position): void {
        this.sprite.setPosition(position.x, position.y)
        this.sprite.setInteractive()
    }

    public update(keysPressed: KeysPressed): void {
        this.movePlayer(keysPressed)
    }

    public get position(): Position {
        return new Position(this.sprite.x, this.sprite.y)
    }

    private movePlayer(keysPressed: KeysPressed): void {
        if (keysPressed['ArrowRight'] && keysPressed['ArrowUp']) {
            this.sprite.x += this.speed
            this.sprite.y -= this.speed
        } else if (keysPressed['ArrowRight'] && keysPressed['ArrowDown']) {
            this.sprite.x += this.speed
            this.sprite.y += this.speed
        } else if (keysPressed['ArrowLeft'] && keysPressed['ArrowUp']) {
            this.sprite.x -= this.speed
            this.sprite.y -= this.speed
        } else if (keysPressed['ArrowLeft'] && keysPressed['ArrowDown']) {
            this.sprite.x -= this.speed
            this.sprite.y += this.speed
        } else if (keysPressed['ArrowRight']) {
            this.sprite.x += this.speed
        } else if (keysPressed['ArrowLeft']) {
            this.sprite.x -= this.speed
        } else if (keysPressed['ArrowDown']) {
            this.sprite.y += this.speed
        } else if (keysPressed['ArrowUp']) {
            this.sprite.y -= this.speed
        }
    }
}