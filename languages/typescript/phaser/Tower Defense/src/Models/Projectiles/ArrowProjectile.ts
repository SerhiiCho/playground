import Projectile from '@/Models/Projectiles/Projectile'
import arrowImage from '@/assets/towers/projectiles/arrow.png'

const IMAGE_KEY = 'arrowProjectile'

export default class ArrowProjectile extends Projectile {
    public static readonly damage = 35
    public static readonly shotDelay = 1000

    public constructor(image: Phaser.GameObjects.Image) {
        super(
            image,
            ArrowProjectile.shotDelay,
            ArrowProjectile.damage,
            'arrowFlySound',
            'arrowHitSound',
        )
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