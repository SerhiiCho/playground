import Phaser from 'phaser'
import placeholderImage from '@/assets/towers/tower-placeholder.png'
import placeholderPoints from '@/modules/placeholderPoints'

const imageKey = 'spawner'

export default class Placeholder {
    public constructor(
        private readonly image: Phaser.GameObjects.Image,
        private readonly x: number,
        private readonly y: number,
    ) { }

    public static preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.image(imageKey, placeholderImage)
    }

    public static spawn(x: number, y: number, factory: Phaser.GameObjects.GameObjectFactory): Placeholder {
        const image = factory.image(x, y, imageKey)

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

    public create(): void {
        this.image.setPosition(this.x, this.y)
        this.image.setInteractive()
    }
}