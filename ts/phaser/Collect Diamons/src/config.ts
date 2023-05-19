import Phaser from 'phaser'
import PlayScene from './Scenes/PlayScene'
import StartScene from './Scenes/StartScene'

export const gameConfig = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    title: 'Collect Diamonds',
    scene: [StartScene, PlayScene]
}

export const sceneConfig = {
    start: {
        key: 'start',
    },
    play: {
        key: 'play',
    },
}