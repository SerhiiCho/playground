import Projectile from '@/Models/Projectiles/Projectile'
import arrowImage from '@/assets/towers/projectiles/arrow.png'

const IMAGE_KEY = 'arrowProjectile'

export default class ArrowProjectile extends Projectile {
    public constructor(image: Phaser.GameObjects.Image) {
        super(image, 1000, 25, 'arrowFlySound', 'arrowHitSound')
    }

    public static preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.image(IMAGE_KEY, arrowImage)
    }

    public static spawn(x: number, y: number, factory: Phaser.GameObjects.GameObjectFactory): ArrowProjectile {
        const image = factory.image(x, y, IMAGE_KEY)

        const projectile = new ArrowProjectile(image)
        projectile.create(x, y)

        return projectile
    }
}