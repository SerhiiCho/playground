import Phaser from 'phaser'

export default class {
    constructor(
        public sprite: Phaser.GameObjects.Sprite,
        public spriteHover: Phaser.GameObjects.Sprite
    ) {
    }

    public create(): void {
        this.handleButtonHover()
    }

    public onClick(callback: Function): void {
        this.spriteHover.on('pointerdown', callback)
    }

    private handleButtonHover(): void {
        this.sprite
            .on('pointerover', () => {
                this.sprite.setVisible(false)
                this.spriteHover.setVisible(true)
            })

        this.spriteHover
            .setVisible(false)
            .on('pointerout', () => {
                this.sprite.setVisible(true)
                this.spriteHover.setVisible(false)
            })
    }
}