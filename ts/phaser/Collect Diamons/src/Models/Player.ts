import type { KeysPressed } from '@/types'
import { gameConfig } from '@/config'
import Position from '@/Models/Position'
import Phaser from 'phaser'

export default class {
    private speed: number = 5
    private isMoving: boolean = false

    private readonly moveKeys = {
        right: 'ArrowRight',
        left: 'ArrowLeft',
        up: 'ArrowUp',
        down: 'ArrowDown',
    }

    private readonly anims = {
        idle: 'playerIdle',
        run: 'playerRun',
    }

    constructor(public sprite: Phaser.GameObjects.Sprite) {
    }

    public create(position: Position): void {
        this.sprite.setPosition(position.x, position.y)
        this.sprite.setInteractive()
        this.createAnimations()
    }

    public update(keysPressed: KeysPressed): void {
        this.movePlayer(keysPressed)
        this.preventPlayerFromLeavingTheScreen()

        if (this.isMoving) {
            this.sprite.anims.play(this.anims.run, true)
        } else {
            this.sprite.anims.play(this.anims.idle, true)
        }
    }

    public get position(): Position {
        return new Position(this.sprite.x, this.sprite.y)
    }

    private createAnimations(): void {
        this.sprite.anims.create({
            key: this.anims.idle,
            frames: this.sprite.anims.generateFrameNumbers(this.anims.idle, {
                start: 0,
                end: 4,
            }),
        })

        this.sprite.anims.create({
            key: this.anims.run,
            frames: this.sprite.anims.generateFrameNumbers(this.anims.run, {
                start: 0,
                end: 5,
            }),
        })
    }

    private preventPlayerFromLeavingTheScreen(): void {
        const playerHalfHeight = this.sprite.height / 2

        if (this.sprite.x < 0) {
            this.sprite.x = 0
        } else if (this.sprite.x > Number(gameConfig.width)) {
            this.sprite.x = Number(gameConfig.width)
        } else if (this.sprite.y < 0) {
            this.sprite.y = 0
        } else if (this.sprite.y > Number(gameConfig.height) - playerHalfHeight) {
            this.sprite.y = Number(gameConfig.height) - playerHalfHeight
        }
    }

    private movePlayer(keysPressed: KeysPressed): void {
        this.isMoving = Object.values(this.moveKeys)
            .some(key => keysPressed[key])

        if (this.isMoving) {
            this.sprite.anims.play(this.anims.run, true)
        }

        if (keysPressed[this.moveKeys.right] && keysPressed[this.moveKeys.up]) {
            this.sprite.x += this.speed
            this.sprite.y -= this.speed
            this.sprite.flipX = false
        } else if (keysPressed[this.moveKeys.right] && keysPressed[this.moveKeys.down]) {
            this.sprite.x += this.speed
            this.sprite.y += this.speed
            this.sprite.flipX = false
        } else if (keysPressed[this.moveKeys.left] && keysPressed[this.moveKeys.up]) {
            this.sprite.x -= this.speed
            this.sprite.y -= this.speed
            this.sprite.flipX = true
        } else if (keysPressed[this.moveKeys.left] && keysPressed[this.moveKeys.down]) {
            this.sprite.x -= this.speed
            this.sprite.y += this.speed
            this.sprite.flipX = true
        } else if (keysPressed[this.moveKeys.right]) {
            this.sprite.x += this.speed
            this.sprite.flipX = false
        } else if (keysPressed[this.moveKeys.left]) {
            this.sprite.x -= this.speed
            this.sprite.flipX = true
        } else if (keysPressed[this.moveKeys.down]) {
            this.sprite.y += this.speed
        } else if (keysPressed[this.moveKeys.up]) {
            this.sprite.y -= this.speed
        }
    }
}