import type { EnemySpriteKeys, SpriteKey, EnemyAnimationKeys } from '@/types'
import Phaser from 'phaser'
import ememyPathLines from '@/modules/ememyPathLines'
import HealthBar from '@/Models/HealthBar'
import GameScene from '@/Scenes/GameScene'

const hideCorpseDelay = 5000

const animationKeys: EnemyAnimationKeys = {
    walk: 'enemyWalk',
    die: 'enemyDie',
    attack: 'enemyAttack',
}

export default class Enemy extends Phaser.GameObjects.Sprite {
    private rand: number
    private health: number = 100
    private healthBar: HealthBar
    private follower: Phaser.GameObjects.PathFollower | undefined
    private path: Phaser.Curves.Path | undefined

    public constructor(
        public readonly scene: GameScene,
        public x: number,
        public y: number,
        public readonly zIndex: number,
        public readonly spriteKeys: EnemySpriteKeys,
    ) {
        super(scene, x, y, spriteKeys.walk)

        this.rand = Math.floor(Math.random() * 200)

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

        this.follower = this.createFollower()
        this.follower.startFollow(40000)
        this.follower.anims.play(animationKeys.walk, true)

        this.follower.setPath(this.path!).on('pathupdate', (t: number) => {
            const vec = this.path!.getPoint(t)
            console.log(vec.x, vec.y)
        })
    }

    private createFollower(): Phaser.GameObjects.PathFollower {
        this.path = this.scene.add.path(this.x, this.y)

        for (const point of ememyPathLines(this.rand)) {
            this.path.lineTo(point.x, point.y)
        }

        return this.scene.add.follower(this.path, this.x, this.y, this.spriteKeys.walk)
    }

    public hitEnemy(damage: number): void {
        this.health -= damage

        if (this.health <= 0) {
            this.health = 0
            this.anims.play(this.spriteKeys.die, true)
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

        this.healthBar.draw(this.health)
    }

    private hideEnemyAfterDelay(): void {
        setTimeout(() => this.destroy(), hideCorpseDelay)
    }

    private createAnimations(): void {
        this.scene.anims.create({
            key: animationKeys.walk,
            frames: this.scene.anims.generateFrameNumbers(this.spriteKeys.walk, {
                start: 0,
                end: 9,
            }),
            frameRate: 12,
            repeat: -1,
        })

        this.scene.anims.create({
            key: animationKeys.die,
            frames: this.scene.anims.generateFrameNumbers(this.spriteKeys.die, {
                start: 0,
                end: 11,
            }),
            frameRate: 12,
            repeat: 0,
        })

        this.scene.anims.create({
            key: animationKeys.attack,
            frames: this.scene.anims.generateFrameNumbers(this.spriteKeys.attack, {
                start: 0,
                end: 7,
            }),
            frameRate: 12,
            repeat: -1,
        })
    }
}