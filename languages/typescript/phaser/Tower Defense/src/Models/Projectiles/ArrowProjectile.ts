import Projectile from '@/Models/Projectiles/Projectile'
import GameScene from '@/Scenes/GameScene'
import arrowImage from '@/assets/towers/projectiles/arrow.png'

const imageKey = 'arrowProjectile' as const

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


    public static preload(scene: GameScene): void {
        scene.load.image(imageKey, arrowImage)
    }

    public static spawn(x: number, y: number, factory: Phaser.GameObjects.GameObjectFactory): ArrowProjectile {
        const image = factory.image(x, y, imageKey)

        const projectile = new ArrowProjectile(image)
        projectile.create(x, y)

        return projectile
    }
}