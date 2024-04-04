import Projectile from '@/Models/Projectiles/Projectile'
import arrowImage from '@/assets/towers/projectiles/arrow.png'

const imageKey = 'arrowProjectile'

export default class ArrowProjectile extends Projectile {
    public constructor(image: Phaser.GameObjects.Image) {
        super(image, 1000, 25)
    }

    public static preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.image(imageKey, arrowImage)
    }

    public static spawn(x: number, y: number, factory: Phaser.GameObjects.GameObjectFactory): ArrowProjectile {
        const image = factory.image(x, y, imageKey)

        const projectile = new ArrowProjectile(image)
        projectile.create(x, y)

        return projectile
    }
}