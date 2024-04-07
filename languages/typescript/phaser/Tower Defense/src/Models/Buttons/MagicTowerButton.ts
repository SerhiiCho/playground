import Button from '@/Models/Buttons/Button'
import magicTowerButtonImage from '@/assets/towers/magic-icon.png'
import { config } from '@/config'
import MagicTower from '@/Models/Tower/MagicTower'
import GameScene from '@/Scenes/GameScene'

const imageKey = 'magicTowerButton' as const

export default class MagicTowerButton extends Button {
    public constructor(scene: GameScene) {
        const x = 200
        const y = config.height - 100

        super(scene, MagicTower.price, x, y, imageKey)
    }

    public static preload(scene: GameScene): void {
        scene.load.image(imageKey, magicTowerButtonImage)
    }

    public static spawn(scene: GameScene): MagicTowerButton {
        const button = new MagicTowerButton(scene)
        button.create()

        return button
    }
}