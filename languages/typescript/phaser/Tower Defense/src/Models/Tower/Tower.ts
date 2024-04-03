export default class Tower {
    constructor(public sprite: Phaser.GameObjects.Sprite) {
    }

    public create(x: number, y: number): void {
        this.sprite.setPosition(x, y)
        this.sprite.setInteractive()
    }

    public update(): void {
        //
    }
}