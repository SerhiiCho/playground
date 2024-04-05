import Phaser from 'phaser'
import Tower from '@/Models/Tower/Tower'
import Enemy from '@/Models/Enemy/Enemy'
import arrowTowerIdle from '@/assets/towers/arrow-tower.png'
import ArrowProjectile from '@/Models/Projectiles/ArrowProjectile'
import GameScene from '@/Scenes/GameScene'

export default class ArrowTower extends Tower {
    public static readonly price = 20
    public static readonly range = 380

    constructor(sprite: Phaser.GameObjects.Sprite, enemies: Enemy[], projectile: ArrowProjectile) {
        super(sprite, ArrowTower.range, enemies, projectile, ArrowTower.price)
    }

    public static preload(scene: GameScene): void {
        scene.load.spritesheet('arrowTowerIdle', arrowTowerIdle, {
            frameWidth: 125,
            frameHeight: 150,
        })

        ArrowProjectile.preload(scene)
    }

    public static spawn(
        x: number,
        y: number,
        factory: Phaser.GameObjects.GameObjectFactory,
        enemies: Enemy[],
    ): ArrowTower {
        const sprite = factory.sprite(100, 100, 'arrowTowerIdle')
        const projectile = ArrowProjectile.spawn(x, y, sprite.scene.add)
        const tower = new ArrowTower(sprite, enemies, projectile)

        tower.create(x, y)

        return tower
    }
}