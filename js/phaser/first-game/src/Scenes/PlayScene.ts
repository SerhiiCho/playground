import Phaser from 'phaser'

export default class PlayScene extends Phaser.Scene {
    constructor() {
        super({
            key: 'play',
            physics: {
                arcade: {
                    gravity: { y: 300 },
                    debug: false
                }
            }
        })
    }

    create(): void {
        //
    }

    update(): void {

    }
}
