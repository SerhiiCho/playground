import Phaser from 'phaser'
import PlayScene from './Scenes/PlayScene'

export default {
    type: Phaser.AUTO,
    width: 640,
    height: 360,
    title: 'First game',
    scene: [PlayScene]
}
