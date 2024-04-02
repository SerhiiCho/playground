import Phaser from 'phaser'
import ZombieEnemy from '@/Models/ZombieEnemy'
import zombieWalk from '@/assets/enemies/1.zombie/walk.png'
import zombieDie from '@/assets/enemies/1.zombie/die.png'
import zombieAttack from '@/assets/enemies/1.zombie/attack.png'

export default (loader: Phaser.Loader.LoaderPlugin) => {
    loader.spritesheet(ZombieEnemy.anims.walk, zombieWalk, {
        frameWidth: 107.5,
        frameHeight: 130,
    })

    loader.spritesheet(ZombieEnemy.anims.die, zombieDie, {
        frameWidth: 165.5,
        frameHeight: 130,
    })

    loader.spritesheet(ZombieEnemy.anims.attack, zombieAttack, {
        frameWidth: 104,
        frameHeight: 130,
    })
}