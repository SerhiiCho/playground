import Phaser from 'phaser'
import placeholderImage from '@/assets/towers/tower-placeholder.png'
import arrowTowerIdle from '@/assets/towers/arrow-tower.png'

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

    public create(): void {
        this.image.setPosition(this.x, this.y)
        this.image.setInteractive()
    }
}