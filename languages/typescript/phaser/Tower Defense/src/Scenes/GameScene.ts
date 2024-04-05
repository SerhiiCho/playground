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
import buildingCompletedSound from '@/assets/sounds/building-completed.mp3'

export default class GameScene extends Phaser.Scene {
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

        this.load
            .audio('actionMusic', actionMusic)
            .audio('arrowFlySound', arrowFlySound)
            .audio('arrowHitSound', arrowHitSound)
            .audio('buildingCompletedSound', buildingCompletedSound)

        ArrowTowerButton.preload(this.load)
        ArrowTower.preload(this.load)
        ZombieEnemy.preload(this.load)
        Placeholder.preload(this.load)
    }

    public create(): void {
        this.add.image(0, 0, 'map')
            .setOrigin(0, 0)
            .setDisplaySize(config.width, config.height)

        this.sound.play('actionMusic', { loop: true, volume: 0.5 })

        this.add.image(220, 450, 'castle')
            .setOrigin(0, 0)

        this.buttons.push(ArrowTowerButton.spawn(this.add))
        this.placeholders = Placeholder.spawnAll(this.add)
        this.enemies = ZombieEnemy.spawn(10, this.add)

        this.handleButtonClicks()
        this.handlePlaceholderClicks()
    }

    public update(): void {
        this.enemies.forEach(enemy => enemy.update())
        this.towers.forEach(tower => tower.update())
        this.buttons.forEach(button => button.update())
    }

    private handleButtonClicks(): void {
        this.buttons.forEach(button => {
            button.onClick((pointer: Phaser.Input.Pointer) => {
                dispatchEvent(events.togglePlaceholderVisibility)
            })
        })
    }

    private handlePlaceholderClicks(): void {
        this.placeholders.forEach(placeholder => {
            placeholder.onClick((pointer: Phaser.Input.Pointer) => {
                this.sound.play('buildingCompletedSound', { volume: 0.5 })
                dispatchEvent(events.togglePlaceholderVisibility)
                const tower = ArrowTower.spawn(placeholder.x, placeholder.y, this.add, this.enemies)
                this.towers.push(tower)
                placeholder.destroy()
            })
        })
    }
}