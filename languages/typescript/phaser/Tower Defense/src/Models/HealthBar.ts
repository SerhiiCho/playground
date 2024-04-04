import Phaser from 'phaser'
import colors from '@/modules/colors'

export default class HealthBar {
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
        this.healthBar.fillStyle(colors.black, 1)
        this.healthBar.fillRoundedRect(x, y, barWidth, barHeight, radius)

        this.healthBar.fillStyle(this.activeColor(health), 1)
        this.healthBar.fillRoundedRect(x, y + 1, healthWidth - 2, barHeight - 2, radius)
    }

    public destroy(): void {
        if (this.healthBar) {
            this.healthBar.destroy()
        }
    }

    private activeColor(health: number): number {
        if (health > 60) {
            return colors.green
        }

        return health > 30 ? colors.orange : colors.red
    }
}