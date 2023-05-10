import Phaser from 'phaser'
import imageBrick from '../assets/brick-ground.png'

export default class PlayScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'play',
            physics: {
                arcade: {
                    gravity: { y: 300 },
                    debug: false
                }
            }
        })
    }

    preload(): void {
        this.load.image('brick', imageBrick)
    }

    create(): void {
        const canvasWidth = Number(this.sys.game.config.width)
        const canvasHeight = Number(this.sys.game.config.height)

        this.add.sprite(0, 0, 'brick')
            .setPosition(canvasWidth / 2, canvasHeight / 2)
    }

    update(): void {

    }
}
