import { config } from '@/config'
import mapImage from '@/assets/map.png'
import castleImage from '@/assets/castle.png'
import Enemy from '@/Models/Enemy'
import ZombieEnemy from '@/Models/ZombieEnemy'

export default class extends Phaser.Scene {
    private enemies: Enemy[]

    public constructor() {
        super('GameScene')
        this.enemies = []
    }

    public preload(): void {
        this.load
            .image('map', mapImage)
            .image('castle', castleImage)

        ZombieEnemy.loadSprites(this.load)
    }

    public create(): void {
        this.add.image(0, 0, 'map')
            .setOrigin(0, 0)
            .setDisplaySize(config.width, config.height)

        this.add.image(220, 450, 'castle')
            .setOrigin(0, 0)

        this.enemies = ZombieEnemy.spawn(10, this.add)
    }

    public update(): void {
        this.enemies.forEach(enemy => enemy.update())
    }
}