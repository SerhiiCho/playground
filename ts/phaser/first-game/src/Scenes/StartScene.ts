import Phaser from 'phaser'
import { sceneConfig } from '../config'
import imageBackground from '../assets/start.jpg'

export default class StartScene extends Phaser.Scene {
    private canvasWidth: number = 0
    private canvasHeight: number = 0

    constructor() {
        super(sceneConfig.start)
    }

    public preload(): void {
        this.load.image('background', imageBackground)

        this.canvasWidth = Number(this.sys.game.config.width)
        this.canvasHeight = Number(this.sys.game.config.height)
    }

    public create(): void {
        this.add.sprite(0, 0, 'background')
            .setPosition(this.canvasWidth / 2, this.canvasHeight / 2)
    }

    public update(): void {
        //
    }
}
