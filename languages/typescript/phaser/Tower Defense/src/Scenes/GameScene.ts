import { config } from '@/config'
import mapImage from '@/assets/map.png'
import castleImage from '@/assets/castle.png'
import enemy1Image from '@/assets/enemies/1.zombie.png'
import Enemy from '@/Models/Enemy'

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

        this.load.spritesheet('1.zombie', enemy1Image, {
            frameWidth: 107.5,
            frameHeight: 129.75,
        })
    }

    public create(): void {
        this.add.image(0, 0, 'map')
            .setOrigin(0, 0)
            .setDisplaySize(config.width, config.height)

        this.add.image(220, 450, 'castle')
            .setOrigin(0, 0)

        for (let i = 1, z = 99999; i < 11; i++, z--) {
            const x = -(i * 70)
            const y = 150

            const enemy = new Enemy(this.add.sprite(x, y, '1.zombie'), z)
            enemy.create(x, y)
            this.enemies.push(enemy)
        }
    }

    public update(): void {
        this.enemies.forEach(enemy => enemy.update())
    }
}