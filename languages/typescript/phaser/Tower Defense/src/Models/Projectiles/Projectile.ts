import Enemy from '@/Models/Enemy/Enemy'
import Tower from '@/Models/Tower/Tower'

export default class Projectile {
    private isShooting: boolean = false

    public constructor(private image: Phaser.GameObjects.Image) {
    }

    public create(x: number, y: number): void {
        this.image.setPosition(x, y)
        this.image.setInteractive()
        this.image.setVisible(false)
        this.image.scene.physics.add.existing(this.image)
    }

    public update(): void {
        this.drawShooting()
    }

    public shoot(enemy: Enemy, tower: Tower): void {
        if (this.isShooting) {
            return
        }

        this.image.setPosition(tower.sprite.x, tower.sprite.y)
        this.image.setVisible(true)
        this.image.scene.physics.moveToObject(this.image, enemy.sprite, 1000)
        this.isShooting = true

        // check if collided with enemy
        this.image.scene.physics.add.overlap(this.image, enemy.sprite, () => {
            enemy.hitEnemy(10)
            this.image.setVisible(false)
            this.isShooting = false
        })
    }

    private drawShooting(): void {
        //
    }
}