import Phaser from 'phaser'
import placeholderImage from '@/assets/towers/tower-placeholder.png'
import placeholderPoints from '@/modules/placeholderPoints'
import listenEvent from '@/modules/listenEvent'
import { events } from '@/config'
import GameScene from '@/Scenes/GameScene'

const imageKey = 'spawner' as const

export default class Placeholder {
    public constructor(
        public readonly image: Phaser.GameObjects.Image,
        public readonly x: number,
        public readonly y: number,
    ) { }

    public static preload(scene: GameScene): void {
        scene.load.image(imageKey, placeholderImage)
    }

    public static spawn(scene: GameScene, x: number, y: number): Placeholder {
        const image = scene.add.image(x, y, imageKey)

        const placeholder = new Placeholder(image, x, y)
        placeholder.create()

        return placeholder
    }

    public static spawnAll(scene: GameScene): Placeholder[] {
        const result = []

        for (const point of placeholderPoints) {
            result.push(Placeholder.spawn(scene, point.x, point.y))
        }

        return result
    }

    public destroy(): void {
        this.image.destroy()
    }

    public onClick(callback: Function): void {
        this.image.on('pointerdown', callback)
    }

    public create(): void {
        this.image.setPosition(this.x, this.y)
        this.image.setInteractive()
        this.image.setVisible(false)

        listenEvent(events.togglePlaceholderVisibility, () => {
            this.image.setVisible(!this.image.visible)
        })
    }
}