import Phaser from 'phaser'
import Button from '@/Models/Buttons/Button'
import arrowTowerButtonImage from '@/assets/towers/arrow-icon.png'
import { config } from '@/config'

const imageKey = 'arrowTowerButton'

export default class ArrowTowerButton extends Button {
    public constructor(image: Phaser.GameObjects.Image) {
        super(image)
    }

    public static preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.image(imageKey, arrowTowerButtonImage)
    }

    public static spawn(factory: Phaser.GameObjects.GameObjectFactory,): ArrowTowerButton {
        const x = config.width - 100
        const y = config.height - 100

        const image = factory.image(x, y, imageKey)

        const button = new ArrowTowerButton(image)
        button.create(x, y)

        return button
    }
}