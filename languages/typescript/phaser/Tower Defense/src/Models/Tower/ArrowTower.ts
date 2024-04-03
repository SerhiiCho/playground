import Phaser from 'phaser'
import Tower from '@/Models/Tower/Tower'
import arrowTowerIdle from '@/assets/towers/arrow.png'

export default class ArrowTower extends Tower {
    constructor(sprite: Phaser.GameObjects.Sprite) {
        super(sprite)
    }

    public static loadSprites(loader: Phaser.Loader.LoaderPlugin): void {
        loader.spritesheet('arrowTowerIdle', arrowTowerIdle, {
            frameWidth: 125,
            frameHeight: 150,
        })
    }

    public static spawn(factory: Phaser.GameObjects.GameObjectFactory): ArrowTower {
        const sprite = factory.sprite(100, 100, 'arrowTowerIdle')
        const tower = new ArrowTower(sprite)

        tower.create(300, 300)

        return tower
    }

}