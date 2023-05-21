import Phaser from 'phaser'
import PlayScene from '@/Scenes/PlayScene'
import StartScene from '@/Scenes/StartScene'
import GameOverScene from '@/Scenes/GameOverScene'

export const gameConfig: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    version: '1.0',
    banner: false,
    title: 'Collect Diamonds',
    scene: [StartScene, PlayScene, GameOverScene],
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

export const sceneConfig = {
    start: {
        key: 'start',
    },
    play: {
        key: 'play',
    },
    gameOver: {
        key: 'gameOver',
    },
}
