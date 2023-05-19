import Phaser from 'phaser'
import type { KeysPressed } from '../types'

export default class {
    private playerSpeed: number = 3
    private sprite: Phaser.GameObjects.Sprite

    constructor(sprite: Phaser.GameObjects.Sprite) {
        this.sprite = sprite
    }

    public create(x: number, y: number): void {
        this.sprite.setPosition(x, y)
        this.sprite.setInteractive()
    }

    public update(keysPressed: KeysPressed): void {
        this.movePlayer(keysPressed)
    }

    private movePlayer(keysPressed: KeysPressed): void {
        if (keysPressed['ArrowRight'] && keysPressed['ArrowUp']) {
            this.sprite.x += this.playerSpeed
            this.sprite.y -= this.playerSpeed
        } else if (keysPressed['ArrowRight'] && keysPressed['ArrowDown']) {
            this.sprite.x += this.playerSpeed
            this.sprite.y += this.playerSpeed
        } else if (keysPressed['ArrowLeft'] && keysPressed['ArrowUp']) {
            this.sprite.x -= this.playerSpeed
            this.sprite.y -= this.playerSpeed
        } else if (keysPressed['ArrowLeft'] && keysPressed['ArrowDown']) {
            this.sprite.x -= this.playerSpeed
            this.sprite.y += this.playerSpeed
        } else if (keysPressed['ArrowRight']) {
            this.sprite.x += this.playerSpeed
        } else if (keysPressed['ArrowLeft']) {
            this.sprite.x -= this.playerSpeed
        } else if (keysPressed['ArrowDown']) {
            this.sprite.y += this.playerSpeed
        } else if (keysPressed['ArrowUp']) {
            this.sprite.y -= this.playerSpeed
        }
    }
}