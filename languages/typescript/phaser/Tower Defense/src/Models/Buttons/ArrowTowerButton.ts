import Phaser from 'phaser'
import Button from '@/Models/Buttons/Button'
import arrowTowerButtonImage from '@/assets/towers/arrow-icon.png'
import { config } from '@/config'
import ArrowTower from '@/Models/Tower/ArrowTower'

const IMAGE_KEY = 'arrowTowerButton'

export default class ArrowTowerButton extends Button {
    public constructor(image: Phaser.GameObjects.Image) {
        super(image, ArrowTower.price)
    }

    public static preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.image(IMAGE_KEY, arrowTowerButtonImage)
    }

    public static spawn(factory: Phaser.GameObjects.GameObjectFactory): ArrowTowerButton {
        const x = 80
        const y = config.height - 100

        const image = factory.image(x, y, IMAGE_KEY)

        const button = new ArrowTowerButton(image)
        button.create(x, y)

        return button
    }
}