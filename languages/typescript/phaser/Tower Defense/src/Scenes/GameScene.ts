import { config } from '@/config'
import mapImage from '@/assets/map.png'
import castleImage from '@/assets/castle.png'
import Enemy from '@/Models/Enemy/Enemy'
import ZombieEnemy from '@/Models/Enemy/ZombieEnemy'
import ArrowTower from '@/Models/Tower/ArrowTower'
import Tower from '@/Models/Tower/Tower'

export default class extends Phaser.Scene {
    private enemies: Enemy[]
    private towers: Tower[] = []

    public constructor() {
        super('GameScene')
        this.enemies = []
    }

    public preload(): void {
        this.load
            .image('map', mapImage)
            .image('castle', castleImage)

        ZombieEnemy.loadSprites(this.load)
        ArrowTower.loadSprites(this.load)
    }

    public create(): void {
        this.add.image(0, 0, 'map')
            .setOrigin(0, 0)
            .setDisplaySize(config.width, config.height)

        this.add.image(220, 450, 'castle')
            .setOrigin(0, 0)

        this.enemies = ZombieEnemy.spawn(10, this.add)

        // @todo temporary code for spawning a tower
        this.towers.push(ArrowTower.spawn(this.add))
    }

    public update(): void {
        this.enemies.forEach(enemy => enemy.update())
        this.towers.forEach(tower => tower.update())
    }
}