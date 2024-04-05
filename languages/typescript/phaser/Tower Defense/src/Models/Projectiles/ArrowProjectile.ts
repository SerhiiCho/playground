import Projectile from '@/Models/Projectiles/Projectile'
import GameScene from '@/Scenes/GameScene'
import arrowImage from '@/assets/towers/projectiles/arrow.png'

const imageKey = 'arrowProjectile' as const

export default class ArrowProjectile extends Projectile {
    public static readonly damage = 35
    public static readonly shotDelay = 1000

    public constructor(scene: GameScene, x: number, y: number) {
        super(
            scene,
            x,
            y,
            imageKey,
            ArrowProjectile.shotDelay,
            ArrowProjectile.damage,
            'arrowFlySound',
            'arrowHitSound',
        )
    }

    public static preload(scene: GameScene): void {
        scene.load.image(imageKey, arrowImage)
    }

    public static spawn(scene: GameScene, x: number, y: number): ArrowProjectile {
        const projectile = new ArrowProjectile(scene, x, y)
        projectile.create()

        return projectile
    }
}