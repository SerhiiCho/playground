import Phaser from 'phaser'
import enemyPath from '@/modules/ememyPath'

export default class {
    private currPathIndex = 0
    private rand: number
    private path

    private readonly animations = {
        walk: '1.zombie',
        die: 'enemyDie',
        attack: 'enemyAttack',
    }

    public constructor(
        public sprite: Phaser.GameObjects.Sprite,
        public zIndex: number,
    ) {
        this.rand = Math.floor(Math.random() * 150)
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
    }

    private move(): void {
        if (!this.path[this.currPathIndex]) {
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
    }
}