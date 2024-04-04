import Phaser from 'phaser'
import placeholderImage from '@/assets/towers/tower-placeholder.png'
import placeholderPoints from '@/modules/placeholderPoints'
import listenEvent from '@/modules/listenEvent'
import { events } from '@/config'

const IMAGE_KEY = 'spawner'

export default class Placeholder {
    public constructor(
        public readonly image: Phaser.GameObjects.Image,
        public readonly x: number,
        public readonly y: number,
    ) { }

    public static preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.image(IMAGE_KEY, placeholderImage)
    }

    public static spawn(x: number, y: number, factory: Phaser.GameObjects.GameObjectFactory): Placeholder {
        const image = factory.image(x, y, IMAGE_KEY)

        const placeholder = new Placeholder(image, x, y)
        placeholder.create()

        return placeholder
    }

    public static spawnAll(factory: Phaser.GameObjects.GameObjectFactory): Placeholder[] {
        const result = []

        for (const point of placeholderPoints) {
            result.push(Placeholder.spawn(point.x, point.y, factory))
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