import Tower from '@/Models/Tower/Tower'
import Enemy from '@/Models/Enemy/Enemy'
import arrowTowerIdle from '@/assets/towers/arrow-tower.png'
import ArrowProjectile from '@/Models/Projectiles/ArrowProjectile'
import GameScene from '@/Scenes/GameScene'

const spriteKey = 'arrowTowerIdle' as const

export default class ArrowTower extends Tower {
    public static readonly price = 20
    public static readonly range = 380

    constructor(
        scene: GameScene,
        x: number,
        y: number,
        enemies: Enemy[],
        projectile: ArrowProjectile,
    ) {
        super(
            scene,
            x,
            y,
            spriteKey,
            enemies,
            projectile,
            ArrowTower.range,
            ArrowTower.price,
        )
    }

    public static preload(scene: GameScene): void {
        scene.load.spritesheet(spriteKey, arrowTowerIdle, {
            frameWidth: 125,
            frameHeight: 150,
        })

        ArrowProjectile.preload(scene)
    }

    public static spawn(scene: GameScene, x: number, y: number, enemies: Enemy[]): ArrowTower {
        const projectile = ArrowProjectile.spawn(scene, x, y)
        const tower = new ArrowTower(scene, x, y, enemies, projectile)

        tower.create()

        return tower
    }
}