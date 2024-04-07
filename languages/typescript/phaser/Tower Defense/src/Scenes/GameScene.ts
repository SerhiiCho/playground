import { config, events } from '@/config'
import dispatchEvent from '@/modules/dispatchEvent'
import mapImage from '@/assets/map.png'
import castleImage from '@/assets/castle.png'
import Enemy from '@/Models/Enemy/Enemy'
import ZombieEnemy from '@/Models/Enemy/ZombieEnemy'
import ArrowTower from '@/Models/Tower/ArrowTower'
import Tower from '@/Models/Tower/Tower'
import Button from '@/Models/Buttons/Button'
import ArrowTowerButton from '@/Models/Buttons/ArrowTowerButton'
import Placeholder from '@/Models/Placeholder'
import actionMusic from '@/assets/sounds/music/action.mp3'
import arrowFlySound from '@/assets/sounds/arrow-fly.mp3'
import arrowHitSound from '@/assets/sounds/arrow-hit.mp3'
import magicFlySound from '@/assets/sounds/magic-fly.mp3'
import magicHitSound from '@/assets/sounds/magic-hit.mp3'
import buildingHitSound from '@/assets/sounds/building-hit.mp3'
import buildingCompletedSound from '@/assets/sounds/building-completed.mp3'
import listenEvent from '@/modules/listenEvent'
import MagicTowerButton from '@/Models/Buttons/MagicTowerButton'
import MagicTower from '@/Models/Tower/MagicTower'

export default class GameScene extends Phaser.Scene {
    private enemies: Enemy[] = []
    private towers: Tower[] = []
    private buttons: Button[] = []
    private selectedTower: 'arrow' | 'magic' | undefined
    private placeholders: Placeholder[] = []
    private goldText: Phaser.GameObjects.Text | undefined
    private gold: number = 30

    public constructor() {
        super('GameScene')
    }

    public preload(): void {
        this.load
            .image('map', mapImage)
            .image('castle', castleImage)

        this.load
            .audio('actionMusic', actionMusic)
            .audio('arrowFlySound', arrowFlySound)
            .audio('arrowHitSound', arrowHitSound)
            .audio('magicFlySound', magicFlySound)
            .audio('magicHitSound', magicHitSound)
            .audio('buildingCompletedSound', buildingCompletedSound)
            .audio('buildingHitSound', buildingHitSound)

        ArrowTowerButton.preload(this)
        MagicTowerButton.preload(this)
        ArrowTower.preload(this)
        MagicTower.preload(this)
        ZombieEnemy.preload(this)
        Placeholder.preload(this)
    }

    public create(): void {
        this.add.image(0, 0, 'map')
            .setOrigin(0, 0)
            .setDisplaySize(config.width, config.height)

        this.sound.play('actionMusic', { loop: true, volume: 0.5 })

        this.add.image(220, 450, 'castle')
            .setOrigin(0, 0)

        this.buttons = [
            ArrowTowerButton.spawn(this),
            MagicTowerButton.spawn(this),
        ]

        this.placeholders = Placeholder.spawnAll(this)
        this.enemies = ZombieEnemy.spawn(10, this)

        this.handleButtonClicks()
        this.handlePlaceholderClicks()
        this.listenForGoldEvents()
        this.displayGold()
    }

    public update(): void {
        this.goldText!.setText(`Gold: ${this.gold}`)

        this.enemies.forEach(enemy => enemy.update())
        this.towers.forEach(tower => tower.update())
        this.buttons.forEach(button => button.update())
    }

    private handleButtonClicks(): void {
        this.buttons.forEach(btn => {
            btn.onClick(() => {
                this.selectedTower = btn instanceof ArrowTowerButton ? 'arrow' : 'magic'
                dispatchEvent(events.togglePlaceholderVisibility)
            })
        })
    }

    private handlePlaceholderClicks(): void {
        this.placeholders.forEach(placeholder => {
            placeholder.onClick(() => this.buildTower(placeholder))
        })
    }

    private buildTower(placeholder: Placeholder): void {
        if (this.gold < ArrowTower.price) {
            return
        }

        this.sound.play('buildingCompletedSound', { volume: 0.5 })

        let tower: Tower | undefined

        if (this.selectedTower === 'arrow') {
            tower = ArrowTower.spawn(this, placeholder.x, placeholder.y, this.enemies)
        } else if (this.selectedTower === 'magic') {
            tower = MagicTower.spawn(this, placeholder.x, placeholder.y, this.enemies)
        }

        if (!tower) {
            return
        }

        this.towers.push(tower)

        dispatchEvent(events.togglePlaceholderVisibility)
        dispatchEvent(events.towerIsPlaced, tower.price)

        placeholder.destroy()
    }

    private displayGold(): void {
        this.add.rectangle(115, 35, 220, 60, 0x000000, 0.5)

        this.goldText = this.add.text(20, 18, `Gold: ${this.gold}`, {
            color: '#fff',
            fontSize: '33px',
        })
            .setDepth(1)
    }

    private listenForGoldEvents(): void {
        listenEvent(events.enemyKilled, (amount: number) => this.gold += amount)
        listenEvent(events.towerIsPlaced, (price: number) => this.gold -= price)
    }
}