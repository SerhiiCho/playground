import type { ImageKey } from '@/types'
import GameScene from '@/Scenes/GameScene'
import Phaser from 'phaser'

export default class Button extends Phaser.GameObjects.Image {
    constructor(
        public readonly scene: GameScene,
        public readonly price: number,
        public readonly x: number,
        public readonly y: number,
        public readonly imageKey: ImageKey,
    ) {
        super(scene, x, y, imageKey)
        scene.add.image(x, y, imageKey)
    }

    public create(): void {
        this.setPosition(this.x, this.y)
        this.setInteractive()
        this.createHoverEffect()

        this.scene.add.text(this.x - 18, this.y + 60, String(this.price), {
            color: '#ffffff',
            fontSize: '25px',
        })
    }

    public onClick(callback: Function): void {
        this.on('pointerdown', callback)
    }

    public disable(): void {
        this.disableInteractive()
    }

    public enable(): void {
        this.setInteractive()
    }

    public update(): void {
    }

    private createHoverEffect(): void {
        this.on('pointerover', () => this.setScale(1.05))
        this.on('pointerout', () => this.setScale(1))
    }
}