import Phaser from 'phaser'
import { sceneConfig } from '@/config'
import imageBackground from '@/assets/start.jpg'
import startGameImage from '@/assets/start-game-button.png'
import startGameImageHover from '@/assets/start-game-button-hover.png'
import restartGameImage from '@/assets/restart-game-button.png'
import restartGameImageHover from '@/assets/restart-game-button-hover.png'
import startMusic from '@/assets/audio/menu.mp3'
import buttonClickSound from '@/assets/audio/button-click.mp3'
import mainTitle from '@/assets/title.png'
import Button from '@/Models/Button'
import MainTitle from '@/Models/MainTitle'

export default class StartScene extends Phaser.Scene {
    private canvasWidth: number = 0
    private canvasHeight: number = 0
    private startButton: Button | undefined
    private mainTitle: MainTitle | undefined

    constructor() {
        super(sceneConfig.start)
    }

    public preload(): void {
        this.load.image('startBackground', imageBackground)
        this.load.image('startGame', startGameImage)
        this.load.image('startGameHover', startGameImageHover)
        this.load.image('restartGame', restartGameImage)
        this.load.image('restartGameHover', restartGameImageHover)
        this.load.image('mainTitle', mainTitle)
        this.load.audio('startMusic', startMusic)
        this.load.audio('buttonClickSound', buttonClickSound)

        this.canvasWidth = Number(this.sys.game.config.width)
        this.canvasHeight = Number(this.sys.game.config.height)
    }

    public create(): void {
        this.add.sprite(0, 0, 'startBackground')
            .setPosition(this.canvasWidth / 2, this.canvasHeight / 2)

        this.sound.play('startMusic', { loop: true })

        this.mainTitle = new MainTitle(this.add.sprite(0, 0, 'mainTitle'))
        this.mainTitle.create()

        this.startButton = new Button(
            this.drawButton('startGame'),
            this.drawButton('startGameHover'),
        )

        this.startButton.create()

        this.startButton.onClick(() => {
            this.sound.play('buttonClickSound')
            this.sound.stopByKey('startMusic')
            this.scene.start(sceneConfig.play.key)
        })
    }

    public update(): void {
        this.mainTitle!.update()
    }

    private drawButton(button: string): Phaser.GameObjects.Sprite {
        const btn = this.add
            .sprite(0, 0, button)
            .setPosition(this.canvasWidth / 2, (this.canvasHeight / 2) + 50)
            .setInteractive()

        btn.scale = 0.4

        return btn
    }
}
