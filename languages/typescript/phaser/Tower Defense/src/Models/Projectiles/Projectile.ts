import Enemy from '@/Models/Enemy/Enemy'

export default class Projectile {
    public constructor(private image: Phaser.GameObjects.Image) {
    }

    public create(x: number, y: number): void {
        this.image.setPosition(x, y)
        this.image.setInteractive()
        this.image.setVisible(false)
    }

    public update(): void {
        this.drawShooting()
    }

    public shoot(enemy: Enemy, x: number, y: number): void {
        this.image.setPosition(x, y)
        this.image.setVisible(true)

        this.image.scene.physics.moveToObject(this.image, enemy, 300)
    }

    private drawShooting(): void {
        //
    }
}