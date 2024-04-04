import Phaser from 'phaser'
import Tower from '@/Models/Tower/Tower'
import Enemy from '@/Models/Enemy/Enemy'
import arrowTowerIdle from '@/assets/towers/arrow-tower.png'
import ArrowProjectile from '@/Models/Projectiles/ArrowProjectile'

export default class ArrowTower extends Tower {
    constructor(sprite: Phaser.GameObjects.Sprite, enemies: Enemy[]) {
        super(sprite, 380, enemies)
    }

    public static preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.spritesheet('arrowTowerIdle', arrowTowerIdle, {
            frameWidth: 125,
            frameHeight: 150,
        })

        ArrowProjectile.preload(loader)
    }

    public static spawn(
        x: number,
        y: number,
        factory: Phaser.GameObjects.GameObjectFactory,
        enemies: Enemy[],
    ): ArrowTower {
        const sprite = factory.sprite(100, 100, 'arrowTowerIdle')
        const tower = new ArrowTower(sprite, enemies)

        tower.create(x, y)

        return tower
    }
}