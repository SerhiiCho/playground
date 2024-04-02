import { config } from '@/config'
import spritesPreloader from '@/modules/spritesPreloader'
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

        spritesPreloader(this.load)
    }

    public create(): void {
        this.add.image(0, 0, 'map')
            .setOrigin(0, 0)
            .setDisplaySize(config.width, config.height)

        this.add.image(220, 450, 'castle')
            .setOrigin(0, 0)

        this.spawnZombies()
    }

    public update(): void {
        this.enemies.forEach(enemy => enemy.update())
    }

    private spawnZombies(): void {
        for (let i = 1, z = 99999; i < 11; i++, z--) {
            const x = -(i * 70)
            const y = 150

            const enemy = new ZombieEnemy(this.add.sprite(x, y, 'zombieWalk'), z)
            enemy.create(x, y)
            this.enemies.push(enemy)
        }
    }
}