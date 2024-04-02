import Phaser from 'phaser'
import GameScene from '@/Scenes/GameScene'

export const config = {
    width: 1920,
    height: 1080,
    type: Phaser.AUTO,

    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },

    physics: {
        default: 'arcade',
    },

    scene: [
        GameScene,
    ]
}