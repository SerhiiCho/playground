import Phaser from 'phaser'
import { sceneConfig } from '@/config'
import gameOverImage from '@/assets/game-over.jpg'
import failedAudio from '@/assets/audio/failed.mp3'
import Button from '@/Models/Button'

export default class StartScene extends Phaser.Scene {
    private canvasWidth: number = 0
    private canvasHeight: number = 0
    private button: Button | undefined

    constructor() {
        super(sceneConfig.gameOver)
    }

    public preload(): void {
        this.load.image('gameOver', gameOverImage)
        this.load.audio('failedAudio', failedAudio)

        this.canvasWidth = Number(this.sys.game.config.width)
        this.canvasHeight = Number(this.sys.game.config.height)
    }

    public create(): void {
        this.add.sprite(0, 0, 'gameOver')
            .setPosition(this.canvasWidth / 2, this.canvasHeight / 2)

        this.sound.play('failedAudio')

        this.button = new Button(
            this.drawButton('restartGame'),
            this.drawButton('restartGameHover'),
        )

        this.button.create()

        this.button.onClick(() => {
            this.sound.play('buttonClickSound')
            this.sound.stopByKey('startMusic')
            this.scene.start(sceneConfig.play.key)
        })
    }

    public update(): void {
    }

    private drawButton(button: string): Phaser.GameObjects.Sprite {
        const btn = this.add
            .sprite(0, 0, button)
            .setPosition(this.canvasWidth / 2, (this.canvasHeight / 2) + 100)
            .setInteractive()

        btn.scale = 0.4

        return btn
    }
}
