import Phaser from 'phaser'
import imageBackground from '../assets/background.png'
import imagePlayer from '../assets/player.png'
import imageEnemy from '../assets/enemy.png'

export default class PlayScene extends Phaser.Scene {
    #player: Phaser.GameObjects.Sprite | undefined
    #enemy1: Phaser.GameObjects.Sprite | undefined
    #canvasWidth: number = 0
    #canvasHeight: number = 0
    #playerSpeed: number = 3
    #keysPressed: { [key: string]: boolean } = {}

    constructor() {
        super({
            key: 'play',
        })
    }

    preload(): void {
        this.load.image('background', imageBackground)
        this.load.image('player', imagePlayer)
        this.load.image('enemy', imageEnemy)

        this.#canvasWidth = Number(this.sys.game.config.width)
        this.#canvasHeight = Number(this.sys.game.config.height)
    }

    create(): void {
        this.add.sprite(0, 0, 'background')
            .setPosition(this.#canvasWidth / 2, this.#canvasHeight / 2)

        this.#createPlayer()
        this.#createEnemies()
    }

    update(): void {
        this.#movePlayer()
    }

    #createPlayer(): void {
        this.#player = this.add.sprite(0, 0, 'player')
        this.#player.setPosition(45, this.#canvasHeight / 2)
        this.#player.setInteractive()
        this.#handlePlayerMovement()
    }

    #movePlayer(): void {
        if (this.#keysPressed['ArrowRight'] && this.#keysPressed['ArrowUp']) {
            this.#player!.x += this.#playerSpeed
            this.#player!.y -= this.#playerSpeed
        } else if (this.#keysPressed['ArrowRight'] && this.#keysPressed['ArrowDown']) {
            this.#player!.x += this.#playerSpeed
            this.#player!.y += this.#playerSpeed
        } else if (this.#keysPressed['ArrowLeft'] && this.#keysPressed['ArrowUp']) {
            this.#player!.x -= this.#playerSpeed
            this.#player!.y -= this.#playerSpeed
        } else if (this.#keysPressed['ArrowLeft'] && this.#keysPressed['ArrowDown']) {
            this.#player!.x -= this.#playerSpeed
            this.#player!.y += this.#playerSpeed
        } else if (this.#keysPressed['ArrowRight']) {
            this.#player!.x += this.#playerSpeed
        } else if (this.#keysPressed['ArrowLeft']) {
            this.#player!.x -= this.#playerSpeed
        } else if (this.#keysPressed['ArrowDown']) {
            this.#player!.y += this.#playerSpeed
        } else if (this.#keysPressed['ArrowUp']) {
            this.#player!.y -= this.#playerSpeed
        }
    }

    #handlePlayerMovement(): void {
        this.input.keyboard!.on('keydown', (e: KeyboardEvent) => {
            this.#keysPressed[e.key] = true
        })

        this.input.keyboard!.on('keyup', (e: KeyboardEvent) => {
            this.#keysPressed[e.key] = false
        })
    }

    #createEnemies(): void {
        this.#enemy1 = this.add.sprite(this.#canvasWidth - 90, this.#canvasHeight / 2, 'enemy')
    }
}
