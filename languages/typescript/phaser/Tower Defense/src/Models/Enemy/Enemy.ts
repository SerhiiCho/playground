import type { EnemyAnimationKeys, EnemySpriteKeys } from '@/types'
import Phaser from 'phaser'
import ememyPathLines from '@/modules/ememyPathLines'
import HealthBar from '@/Models/HealthBar'
import GameScene from '@/Scenes/GameScene'

const hideCorpseDelay = 5000

const animationKey: EnemyAnimationKeys = {
    walk: 'enemyWalk',
    die: 'enemyDie',
    attack: 'enemyAttack',
}

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
        public readonly spriteKeys: EnemySpriteKeys,
    ) {
        super(scene, x, y, spriteKeys.walk)

        this.rand = Math.floor(Math.random() * 200)
        this.path = ememyPathLines(this.rand)

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
            this.anims.play(animationKey.die, true)
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
        setTimeout(() => this.destroy(), hideCorpseDelay)
    }

    private move(): void {
        if (this.health <= 0) {
            return
        }

        if (!this.path[this.currPathIndex]) {
            this.attackCastle()
            return
        }

        this.anims.play(animationKey.walk, true)

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
        if (!this.scene.anims.exists(animationKey.walk)) {
            this.scene.anims.create({
                key: animationKey.walk,
                frames: this.scene.anims.generateFrameNumbers(this.spriteKeys.walk, {
                    start: 0,
                    end: 9,
                }),
                frameRate: 12,
                repeat: -1,
            })
        }

        if (!this.scene.anims.exists(animationKey.die)) {
            this.scene.anims.create({
                key: animationKey.die,
                frames: this.scene.anims.generateFrameNumbers(this.spriteKeys.die, {
                    start: 0,
                    end: 11,
                }),
                frameRate: 12,
                repeat: 0,
            })
        }

        if (!this.scene.anims.exists(animationKey.attack)) {
            this.scene.anims.create({
                key: animationKey.attack,
                frames: this.scene.anims.generateFrameNumbers(this.spriteKeys.attack, {
                    start: 0,
                    end: 7,
                }),
                frameRate: 12,
                repeat: -1,
            })
        }
    }

    private attackCastle(): void {
        this.anims.play(animationKey.attack, true)
    }
}