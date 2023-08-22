import Phaser from 'phaser'
import { gameConfig } from '@/config'

export default class {
    private rotationDirection: 'left' | 'right' = 'right'

    constructor(public sprite: Phaser.GameObjects.Sprite) {
    }

    public create(): void {
        const x = gameConfig.width / 2
        const y = (gameConfig.height / 2) - 100

        this.sprite
            .setInteractive()
            .setPosition(x, y)
    }

    public update(): void {
        if (this.sprite.angle > 3) {
            this.rotationDirection = 'left'
        } else if (this.sprite.angle < -3) {
            this.rotationDirection = 'right'
        }

        if (this.rotationDirection === 'right') {
            this.sprite.angle += .03
            this.sprite.scale += .0001
        } else {
            this.sprite.angle -= .03
            this.sprite.scale -= .0001
        }
    }
}