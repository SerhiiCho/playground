import type { KeysPressed } from '@/types'
import Phaser from 'phaser'
import { sceneConfig } from '@/config'
import imageBackground from '@/assets/background.png'
import imagePlayerIdle from '@/assets/player/Idle.png'
import imagePlayerRun from '@/assets/player/Run.png'
import imageEnemyIdle from '@/assets/enemy/Idle.png'
import imageEnemyWalk from '@/assets/enemy/Walk.png'
import actionMusic from '@/assets/audio/action.mp3'
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
        this.load.image('playBackground', imageBackground)
        this.load.audio('actionMusic', actionMusic)

        this.load.spritesheet('enemyIdle', imageEnemyIdle, {
            frameWidth: 128,
            frameHeight: 128,
        })

        this.load.spritesheet('enemyWalk', imageEnemyWalk, {
            frameWidth: 128,
            frameHeight: 128,
        })

        this.load.spritesheet('playerIdle', imagePlayerIdle, {
            frameWidth: 128,
            frameHeight: 128,
        })

        this.load.spritesheet('playerRun', imagePlayerRun, {
            frameWidth: 128,
            frameHeight: 128,
        })

        this.canvasWidth = Number(this.sys.game.config.width)
        this.canvasHeight = Number(this.sys.game.config.height)
    }

    public create(): void {
        this.keysPressed = {}

        this.add.sprite(0, 0, 'playBackground')
            .setPosition(this.canvasWidth / 2, this.canvasHeight / 2)

        this.sound.play('actionMusic', { loop: true })

        this.createCharacters()
        this.handleMovement()
    }

    public update(): void {
        this.player!.update(this.keysPressed)
        this.enemy!.update(this.player!.position)

        if (this.enemy!.isCollidingWith(this.player!.sprite)) {
            this.sound.stopByKey('actionMusic')
            this.scene.start(sceneConfig.gameOver.key)
        }
    }

    private createCharacters(): void {
        this.player = new Player(this.add.sprite(0, 0, 'playerIdle'))
        this.player.create(new Position(45, this.canvasHeight / 2))

        this.enemy = new Enemy(this.add.sprite(0, 0, 'zombieWalk'))
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
