import Phaser from 'phaser'
import PlayScene from '@/Scenes/PlayScene'

export const gameConfig = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    version: '0.0.1',
    banner: false,
    title: 'Castle Fight',
    scene: [PlayScene],
    scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: import.meta.env.DEV,
        },
    },
}

const mapWidth = 3000
const mapHeight = 1000

export const config = {
    map: {
        width: mapWidth,
        height: mapHeight,
        edge: {
            right: mapWidth - gameConfig.width,
            bottom: mapHeight - gameConfig.height - 260,
            top: -240,
            left: 0,
        },
        scrollSpeed: 20,
    },
}
