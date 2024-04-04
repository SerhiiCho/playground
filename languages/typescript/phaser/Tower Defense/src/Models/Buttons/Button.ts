export default class Button {
    constructor(
        public readonly image: Phaser.GameObjects.Image,
        public readonly price: number,
    ) {
    }

    public create(x: number, y: number): void {
        this.image.setPosition(x, y)
        this.image.setInteractive()
        this.createHoverEffect()

        this.image.scene.add.text(x - 18, y + 60, String(this.price), {
            color: '#ffffff',
            fontSize: '25px',
        })
    }

    public onClick(callback: Function): void {
        this.image.on('pointerdown', callback)
    }

    public disable(): void {
        this.image.disableInteractive()
    }

    public enable(): void {
        this.image.setInteractive()
    }

    public update(): void {
    }

    private createHoverEffect(): void {
        this.image.on('pointerover', () => {
            this.image.setScale(1.05)
        })

        this.image.on('pointerout', () => {
            this.image.setScale(1)
        })
    }
}