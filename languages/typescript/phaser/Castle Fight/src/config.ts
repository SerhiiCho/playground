import Phaser from 'phaser'
import PlayScene from '@/Scenes/PlayScene'

// @todo: resize canvas when window is resized

export const gameConfig = {
    type: Phaser.AUTO,
    width: window.innerWidth,
    height: window.innerHeight,
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
            bottom: mapHeight - gameConfig.height,
            top: 0,
            left: 0,
        },
        scrollSpeed: 20,
    },
}
