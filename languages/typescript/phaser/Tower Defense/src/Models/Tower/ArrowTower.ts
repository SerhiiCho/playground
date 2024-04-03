import Phaser from 'phaser'
import Tower from '@/Models/Tower/Tower'
import arrowTowerIdle from '@/assets/towers/arrow-tower.png'

export default class ArrowTower extends Tower {
    constructor(sprite: Phaser.GameObjects.Sprite) {
        super(sprite)
    }

    public static preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.spritesheet('arrowTowerIdle', arrowTowerIdle, {
            frameWidth: 125,
            frameHeight: 150,
        })
    }

    public static spawn(x: number, y: number, factory: Phaser.GameObjects.GameObjectFactory): ArrowTower {
        const sprite = factory.sprite(100, 100, 'arrowTowerIdle')
        const tower = new ArrowTower(sprite)

        tower.create(x, y)

        return tower
    }
}