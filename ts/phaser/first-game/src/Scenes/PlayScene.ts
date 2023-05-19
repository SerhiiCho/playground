import type { KeysPressed } from '../types'
import Phaser from 'phaser'
import { sceneConfig } from '../config'
import imageBackground from '../assets/background.png'
import imagePlayer from '../assets/player.png'
import imageEnemy from '../assets/enemy.png'
import Player from '../Models/Player'

export default class PlayScene extends Phaser.Scene {
    private player: Player | undefined
    private enemy1: Phaser.GameObjects.Sprite | undefined
    private canvasWidth: number = 0
    private canvasHeight: number = 0
    private keysPressed: KeysPressed = {}

    constructor() {
        super(sceneConfig.play)
    }

    public preload(): void {
        this.load.image('background', imageBackground)
        this.load.image('player', imagePlayer)
        this.load.image('enemy', imageEnemy)

        this.canvasWidth = Number(this.sys.game.config.width)
        this.canvasHeight = Number(this.sys.game.config.height)
    }

    public create(): void {
        this.add.sprite(0, 0, 'background')
            .setPosition(this.canvasWidth / 2, this.canvasHeight / 2)

        this.player = new Player(this.add.sprite(0, 0, 'player'))
        this.player.create(45, this.canvasHeight / 2)


        this.createEnemies()
        this.handleMovement()
    }

    public update(): void {
        this.player!.update(this.keysPressed)
    }

    private createEnemies(): void {
        this.enemy1 = this.add.sprite(this.canvasWidth - 90, this.canvasHeight / 2, 'enemy')
    }

    private handleMovement(): void {
        this.input.keyboard!.on('keydown', (e: KeyboardEvent) => {
            this.keysPressed[e.key] = true
        })

        this.input.keyboard!.on('keyup', (e: KeyboardEvent) => {
            this.keysPressed[e.key] = false
        })
    }
}
