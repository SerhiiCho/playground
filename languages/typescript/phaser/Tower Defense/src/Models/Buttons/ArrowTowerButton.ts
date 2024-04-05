import Phaser from 'phaser'
import Button from '@/Models/Buttons/Button'
import arrowTowerButtonImage from '@/assets/towers/arrow-icon.png'
import { config } from '@/config'
import ArrowTower from '@/Models/Tower/ArrowTower'
import GameScene from '@/Scenes/GameScene'

const imageKey = 'arrowTowerButton' as const

export default class ArrowTowerButton extends Button {
    public constructor(scene: GameScene) {
        const x = 80
        const y = config.height - 100

        super(scene, ArrowTower.price, x, y, imageKey)
    }

    public static preload(loader: Phaser.Loader.LoaderPlugin): void {
        loader.image(imageKey, arrowTowerButtonImage)
    }

    public static spawn(scene: GameScene): ArrowTowerButton {
        const button = new ArrowTowerButton(scene)
        button.create()

        return button
    }
}