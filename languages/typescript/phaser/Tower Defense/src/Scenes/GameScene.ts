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

        this.placeholders = Placeholder.spawnAll(this.add)

        this.enemies = ZombieEnemy.spawn(10, this.add)
    }

    public update(): void {
        this.enemies.forEach(enemy => enemy.update())
        this.towers.forEach(tower => tower.update())
        this.buttons.forEach(button => button.update())
    }
}