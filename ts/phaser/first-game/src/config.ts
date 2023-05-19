import Phaser from 'phaser'
import PlayScene from './Scenes/PlayScene'

export const gameConfig = {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    title: 'First game',
    scene: [PlayScene]
}

export const sceneConfig = {
    play: {
        key: 'play',
    },
}