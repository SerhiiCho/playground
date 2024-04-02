import type { Animations } from '@/types'
import Phaser from 'phaser'
import enemyPath from '@/modules/ememyPath'

export default class Enemy {
    private currPathIndex = 0
    private rand: number
    private health: number = 100
    private healthBar: Phaser.GameObjects.Graphics | undefined
    private path

    public constructor(
        protected sprite: Phaser.GameObjects.Sprite,
        protected zIndex: number,
        protected readonly animations: Animations,
    ) {
        this.rand = Math.floor(Math.random() * 200)
        this.path = enemyPath(this.rand)
    }

    public create(x: number, y: number): void {
        this.sprite.setPosition(x, y)
        this.sprite.setInteractive()
        this.sprite.setDepth(this.zIndex)

        this.createAnimations()
    }

    public update(): void {
        this.move()
        this.drawHealthBar()
    }

    private move(): void {
        if (!this.path[this.currPathIndex]) {
            this.attackCastle()
            return
        }

        this.sprite.anims.play(this.animations.walk, true)

        const { x, y, look } = this.path[this.currPathIndex]

        if (x > this.sprite.x) {
            this.sprite.x++
        } else if (x < this.sprite.x) {
            this.sprite.x--
        }

        if (y > this.sprite.y) {
            this.sprite.y++
        } else if (y < this.sprite.y) {
            this.sprite.y--
        }

        if (look === 'l') {
            this.sprite.setFlipX(true)
        } else if (look === 'r') {
            this.sprite.setFlipX(false)
        }

        if (x === this.sprite.x && y === this.sprite.y) {
            this.currPathIndex++
        }
    }

    private createAnimations(): void {
        this.sprite.anims.create({
            key: this.animations.walk,
            frames: this.sprite.anims.generateFrameNumbers(this.animations.walk, {
                start: 0,
                end: 9,
            }),
            frameRate: 12,
        })

        this.sprite.anims.create({
            key: this.animations.die,
            frames: this.sprite.anims.generateFrameNumbers(this.animations.die, {
                start: 0,
                end: 11,
            }),
            frameRate: 12,
        })

        this.sprite.anims.create({
            key: this.animations.attack,
            frames: this.sprite.anims.generateFrameNumbers(this.animations.attack, {
                start: 0,
                end: 7,
            }),
            frameRate: 12,
        })
    }

    private attackCastle(): void {
        this.sprite.anims.play(this.animations.attack, true)
    }

    private drawHealthBar(): void {
        if (this.healthBar) {
            this.healthBar.clear()
        }

        const x = this.sprite.x - 25
        const y = this.sprite.y - 70
        const barWidth = 60
        const barHeight = 8
        const healthWidth = barWidth * (this.health / 100)
        const radius = 4

        this.healthBar = this.sprite.scene.add.graphics()
        this.healthBar.fillStyle(0x000000, 1)
        this.healthBar.fillRoundedRect(x, y, barWidth, barHeight, radius)

        this.healthBar.fillStyle(0xff0000, 1)
        this.healthBar.fillRoundedRect(x, y + 1, healthWidth - 2, barHeight - 2, radius)
    }
}