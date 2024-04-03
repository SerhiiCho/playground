import Phaser from 'phaser'

export default class HealthBar {
    public static colors = {
        red: 0xff0000,
        green: 0x00ff00,
    }

    private healthBar: Phaser.GameObjects.Graphics | undefined

    public constructor(private parentSprite: Phaser.GameObjects.Sprite) {
    }

    public draw(health: number): void {
        if (this.healthBar) {
            this.healthBar.clear()
        }

        const x = this.parentSprite.x - 25
        const y = this.parentSprite.y - 70
        const barWidth = 60
        const barHeight = 8
        const healthWidth = barWidth * (health / 100)
        const radius = 4

        this.healthBar = this.parentSprite.scene.add.graphics()
        this.healthBar.fillStyle(0x000000, 1)
        this.healthBar.fillRoundedRect(x, y, barWidth, barHeight, radius)

        this.healthBar.fillStyle(0xff0000, 1)
        this.healthBar.fillRoundedRect(x, y + 1, healthWidth - 2, barHeight - 2, radius)
    }
}