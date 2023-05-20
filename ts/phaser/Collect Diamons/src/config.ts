import Phaser from 'phaser'
import PlayScene from '@/Scenes/PlayScene'
import StartScene from '@/Scenes/StartScene'
import GameOverScene from '@/Scenes/GameOverScene'

export const gameConfig = {
  type: Phaser.AUTO,
  width: 640,
  height: 360,
  title: 'Collect Diamonds',
  scene: [StartScene, PlayScene, GameOverScene],
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
