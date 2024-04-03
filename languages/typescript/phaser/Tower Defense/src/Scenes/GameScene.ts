import { config } from '@/config'
import mapImage from '@/assets/map.png'
import castleImage from '@/assets/castle.png'
import Enemy from '@/Models/Enemy/Enemy'
import ZombieEnemy from '@/Models/Enemy/ZombieEnemy'
import ArrowTower from '@/Models/Tower/ArrowTower'
import Tower from '@/Models/Tower/Tower'
import Button from '@/Models/Buttons/Button'
import ArrowTowerButton from '@/Models/Buttons/ArrowTowerButton'
import Placeholder from '@/Models/Placeholder'

export default class extends Phaser.Scene {
    private enemies: Enemy[] = []
    private towers: Tower[] = []
    private buttons: Button[] = []
    private placeholders: Placeholder[] = []

    public constructor() {
        super('GameScene')
    }

    public preload(): void {
        this.load
            .image('map', mapImage)
            .image('castle', castleImage)

        ArrowTowerButton.preload(this.load)
        ArrowTower.preload(this.load)
        ZombieEnemy.preload(this.load)
        Placeholder.preload(this.load)
    }

    public create(): void {
        this.add.image(0, 0, 'map')
            .setOrigin(0, 0)
            .setDisplaySize(config.width, config.height)

        this.add.image(220, 450, 'castle')
            .setOrigin(0, 0)

        const arrowTowerBtn = ArrowTowerButton.spawn(this.add)

        // arrowTowerBtn.onClick((pointer: Phaser.Input.Pointer) => {
        //     //
        // })

        this.buttons.push(arrowTowerBtn)

        this.placeholders = [
            Placeholder.spawn(100, 320, this.add),
            Placeholder.spawn(250, 320, this.add),
            Placeholder.spawn(400, 320, this.add),
            Placeholder.spawn(550, 320, this.add),
            Placeholder.spawn(700, 310, this.add),
            Placeholder.spawn(850, 310, this.add),
            Placeholder.spawn(1000, 310, this.add),
            Placeholder.spawn(1150, 320, this.add),
            Placeholder.spawn(1300, 330, this.add),
            Placeholder.spawn(1400, 450, this.add),
            Placeholder.spawn(1380, 600, this.add),
            Placeholder.spawn(1350, 750, this.add),
            Placeholder.spawn(1200, 780, this.add),
            Placeholder.spawn(1050, 770, this.add),
            Placeholder.spawn(900, 770, this.add),
            Placeholder.spawn(750, 760, this.add),
            // right side
            Placeholder.spawn(1500, 100, this.add),
            Placeholder.spawn(1630, 170, this.add),
            Placeholder.spawn(1700, 320, this.add),
            Placeholder.spawn(1710, 470, this.add),
            Placeholder.spawn(1690, 640, this.add),
            Placeholder.spawn(1670, 810, this.add),
        ]

        this.enemies = ZombieEnemy.spawn(10, this.add)
    }

    public update(): void {
        this.enemies.forEach(enemy => enemy.update())
        this.towers.forEach(tower => tower.update())
        this.buttons.forEach(button => button.update())
    }
}