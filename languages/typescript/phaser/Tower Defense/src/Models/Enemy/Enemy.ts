import type { Animations } from '@/types'
import Phaser from 'phaser'
import enemyPath from '@/modules/ememyPath'
import HealthBar from '@/Models/HealthBar'
import GameScene from '@/Scenes/GameScene'

const HIDE_CORPSE_DELAY = 5000

export default class Enemy extends Phaser.GameObjects.Sprite {
    private currPathIndex = 0
    private rand: number
    private health: number = 100
    private healthBar: HealthBar
    private path

    public constructor(
        public readonly scene: GameScene,
        public x: number,
        public y: number,
        public readonly zIndex: number,
        public readonly animations: Animations,
    ) {
        super(scene, x, y, animations.walk)

        this.rand = Math.floor(Math.random() * 200)
        this.path = enemyPath(this.rand)

        this.healthBar = new HealthBar(this)
    }

    public create(): void {
        this.setPosition(this.x, this.y)
        this.setInteractive()
        this.setDepth(this.zIndex)
        this.setVisible(true)

        this.createAnimations()

        this.scene.add.existing(this)
        this.scene.physics.world.enable(this)
    }

    public hitEnemy(damage: number): void {
        this.health -= damage

        if (this.health <= 0) {
            this.health = 0
            this.anims.play(this.animations.die, true)
            this.hideEnemyAfterDelay()
        }
    }

    public isAlive(): boolean {
        return this.health > 0
    }

    public update(): void {
        if (!this.isAlive()) {
            this.healthBar.destroy()
            return
        }

        this.move()
        this.healthBar.draw(this.health)
    }

    private hideEnemyAfterDelay(): void {
        setTimeout(() => this.destroy(), HIDE_CORPSE_DELAY)
    }

    private move(): void {
        if (this.health <= 0) {
            return
        }

        if (!this.path[this.currPathIndex]) {
            this.attackCastle()
            return
        }

        this.anims.play(this.animations.walk, true)

        const { x, y, look } = this.path[this.currPathIndex]

        if (x > this.x) {
            this.x++
        } else if (x < this.x) {
            this.x--
        }

        if (y > this.y) {
            this.y++
        } else if (y < this.y) {
            this.y--
        }

        if (look === 'l') {
            this.setFlipX(true)
        } else if (look === 'r') {
            this.setFlipX(false)
        }

        if (x === this.x && y === this.y) {
            this.currPathIndex++
        }
    }

    private createAnimations(): void {
        this.anims.create({
            key: this.animations.walk,
            frames: this.anims.generateFrameNumbers(this.animations.walk, {
                start: 0,
                end: 9,
            }),
            frameRate: 12,
        })

        this.anims.create({
            key: this.animations.die,
            frames: this.anims.generateFrameNumbers(this.animations.die, {
                start: 0,
                end: 11,
            }),
            frameRate: 12,
            repeat: 0,
        })

        this.anims.create({
            key: this.animations.attack,
            frames: this.anims.generateFrameNumbers(this.animations.attack, {
                start: 0,
                end: 7,
            }),
            frameRate: 12,
        })
    }

    private attackCastle(): void {
        this.anims.play(this.animations.attack, true)
    }
}