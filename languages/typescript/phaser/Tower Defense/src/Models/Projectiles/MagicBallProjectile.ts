import Projectile from '@/Models/Projectiles/Projectile'
import GameScene from '@/Scenes/GameScene'
import magicBallImage from '@/assets/towers/projectiles/magic-ball.png'

const imageKey = 'magicBallProjectile' as const

export default class MagicBallProjectile extends Projectile {
    public static readonly damage = 50
    public static readonly shotDelay = 1000

    public constructor(scene: GameScene, x: number, y: number) {
        super(
            scene,
            x,
            y,
            imageKey,
            MagicBallProjectile.shotDelay,
            MagicBallProjectile.damage,
            'magicFlySound',
            'magicHitSound',
        )
    }

    public static preload(scene: GameScene): void {
        scene.load.image(imageKey, magicBallImage)
    }

    public static spawn(scene: GameScene, x: number, y: number): MagicBallProjectile {
        const projectile = new MagicBallProjectile(scene, x, y)
        projectile.create()

        return projectile
    }
}