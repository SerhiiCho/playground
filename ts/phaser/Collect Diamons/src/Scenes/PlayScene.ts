import type { KeysPressed } from '@/types'
import Phaser from 'phaser'
import { sceneConfig } from '@/config'
import imageBackground from '@/assets/background.png'
import imagePlayer from '@/assets/player.png'
import imageEnemy from '@/assets/enemy.png'
import Player from '@/Models/Player'
import Enemy from '@/Models/Enemy'
import Position from '@/Models/Position'

export default class PlayScene extends Phaser.Scene {
    private player: Player | undefined
    private enemy: Enemy | undefined
    private canvasWidth: number = 0
    private canvasHeight: number = 0
    private keysPressed: KeysPressed = {}

    constructor() {
        super(sceneConfig.play)
    }

    public preload(): void {
        this.load.image('play-background', imageBackground)
        this.load.image('player', imagePlayer)
        this.load.image('enemy', imageEnemy)

        this.canvasWidth = Number(this.sys.game.config.width)
        this.canvasHeight = Number(this.sys.game.config.height)
    }

    public create(): void {
        this.add.sprite(0, 0, 'play-background')
            .setPosition(this.canvasWidth / 2, this.canvasHeight / 2)

        this.createCharacters()
        this.handleMovement()
    }

    public update(): void {
        this.player!.update(this.keysPressed)
        this.enemy!.update(this.player!.position)
    }

    private createCharacters(): void {
        this.player = new Player(this.add.sprite(0, 0, 'player'))
        this.player.create(new Position(45, this.canvasHeight / 2))

        this.enemy = new Enemy(this.add.sprite(0, 0, 'enemy'))
        this.enemy.create(new Position(this.canvasWidth - 90, this.canvasHeight / 2))
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
