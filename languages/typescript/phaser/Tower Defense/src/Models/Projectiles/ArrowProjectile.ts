import Projectile from '@/Models/Projectiles/Projectile'
import arrowImage from '@/assets/towers/projectiles/arrow.png'

export default class ArrowProjectile extends Projectile {
    public constructor(image: Phaser.GameObjects.Image) {
        super(image)
    }

    public static preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.image('arrowProjectile', arrowImage)
    }
}