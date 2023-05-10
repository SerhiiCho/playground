import Phaser from 'phaser'
import imageBackground from '../assets/background.png'
import imagePlayer from '../assets/player.png'
import imageEnemy from '../assets/enemy.png'

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
        this.load.image('background', imageBackground)
        this.load.image('player', imagePlayer)
        this.load.image('enemy', imageEnemy)
    }

    create(): void {
        const canvasWidth = Number(this.sys.game.config.width)
        const canvasHeight = Number(this.sys.game.config.height)

        this.add.sprite(0, 0, 'background')
            .setPosition(canvasWidth / 2, canvasHeight / 2)

        this.add.sprite(0, 0, 'player')
            .setPosition(45, canvasHeight / 2)

        this.#createEnemies(canvasWidth, canvasHeight)
    }

    update(): void {
        //
    }

    #createEnemies(canvasWidth: number, canvasHeight: number): void {
        this.add.sprite(canvasWidth - 90, canvasHeight / 2, 'enemy')
        this.add.sprite(canvasWidth - 200, canvasHeight / 2, 'enemy')
    }
}
