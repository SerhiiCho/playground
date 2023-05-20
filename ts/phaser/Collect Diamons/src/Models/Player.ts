import type { KeysPressed } from '@/types'
import Position from '@/Models/Position'
import Phaser from 'phaser'

export default class {
    private speed: number = 2
    private isMoving: boolean = false

    private moveKeys = {
        right: 'ArrowRight',
        left: 'ArrowLeft',
        up: 'ArrowUp',
        down: 'ArrowDown',
    }

    private animations = {
        idle: 'playerIdle',
        run: 'playerRun',
    }

    constructor(public sprite: Phaser.GameObjects.Sprite) {
    }

    public create(position: Position): void {
        this.sprite.setPosition(position.x, position.y)
        this.sprite.setInteractive()

        this.sprite.anims.create({
            key: this.animations.idle,
            frames: this.sprite.anims.generateFrameNumbers(this.animations.idle, {
                start: 0,
                end: 4,
            }),
        })

        this.sprite.anims.create({
            key: this.animations.run,
            frames: this.sprite.anims.generateFrameNumbers(this.animations.run, {
                start: 0,
                end: 5,
            }),
        })
    }

    public update(keysPressed: KeysPressed): void {
        this.movePlayer(keysPressed)

        if (this.isMoving) {
            this.sprite.anims.play(this.animations.run, true)
        } else {
            this.sprite.anims.play(this.animations.idle, true)
        }
    }

    public get position(): Position {
        return new Position(this.sprite.x, this.sprite.y)
    }

    private movePlayer(keysPressed: KeysPressed): void {
        this.isMoving = Object.values(this.moveKeys)
            .some(key => keysPressed[key])

        if (keysPressed[this.moveKeys.right] && keysPressed[this.moveKeys.up]) {
            this.sprite.x += this.speed
            this.sprite.y -= this.speed
            this.sprite.flipX = false
        } else if (keysPressed[this.moveKeys.right] && keysPressed[this.moveKeys.down]) {
            this.sprite.x += this.speed
            this.sprite.y += this.speed
            this.sprite.flipX = false
            this.sprite.anims.play('playerRun', true)
        } else if (keysPressed[this.moveKeys.left] && keysPressed[this.moveKeys.up]) {
            this.sprite.x -= this.speed
            this.sprite.y -= this.speed
            this.sprite.flipX = true
            this.sprite.anims.play('playerRun', true)
        } else if (keysPressed[this.moveKeys.left] && keysPressed[this.moveKeys.down]) {
            this.sprite.x -= this.speed
            this.sprite.y += this.speed
            this.sprite.flipX = true
            this.sprite.anims.play('playerRun', true)
        } else if (keysPressed[this.moveKeys.right]) {
            this.sprite.x += this.speed
            this.sprite.flipX = false
            this.sprite.anims.play('playerRun', true)
        } else if (keysPressed[this.moveKeys.left]) {
            this.sprite.x -= this.speed
            this.sprite.flipX = true
            this.sprite.anims.play('playerRun', true)
        } else if (keysPressed[this.moveKeys.down]) {
            this.sprite.y += this.speed
            this.sprite.anims.play('playerRun', true)
        } else if (keysPressed[this.moveKeys.up]) {
            this.sprite.y -= this.speed
            this.sprite.anims.play('playerRun', true)
        }
    }
}