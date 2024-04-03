export default class Button {
    constructor(public image: Phaser.GameObjects.Image) {
    }

    public create(x: number, y: number): void {
        this.image.setPosition(x, y)
        this.image.setInteractive()
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
}