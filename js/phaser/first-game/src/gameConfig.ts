import Phaser from 'phaser'
import PlayScene from './Scenes/PlayScene'

export default {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    title: 'First game',
    scene: [PlayScene]
}
