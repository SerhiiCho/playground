export default class Projectile {
    public constructor(private image: Phaser.GameObjects.Image) {
    }

    public create(x: number, y: number): void {
        this.image.setPosition(x, y)
        this.image.setInteractive()
    }

    public update(): void {
        //
    }
}