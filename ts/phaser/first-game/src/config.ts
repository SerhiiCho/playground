import Phaser from 'phaser'
import PlayScene from './Scenes/PlayScene'

export default {
    type: Phaser.AUTO,
    width: 800,
    height: 400,
    title: 'First game',
    scene: [PlayScene]
}
