import Phaser from 'phaser'
import { sceneConfig } from '@/config'
import gameOverImage from '@/assets/game-over.jpg'
import failedAudio from '@/assets/audio/failed.mp3'

export default class StartScene extends Phaser.Scene {
    private canvasWidth: number = 0
    private canvasHeight: number = 0

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
    }

    public update(): void {
    }
}
