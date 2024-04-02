import type { Animations } from '@/types'
import Phaser from 'phaser'
import Enemy from '@/Models/Enemy'
import zombieWalk from '@/assets/enemies/1.zombie/walk.png'
import zombieDie from '@/assets/enemies/1.zombie/die.png'
import zombieAttack from '@/assets/enemies/1.zombie/attack.png'

export default class ZombieEnemy extends Enemy {
    public static anims: Animations = {
        walk: 'zombieWalk',
        die: 'zombieDie',
        attack: 'zombieAttack',
    }

    public constructor(
        public sprite: Phaser.GameObjects.Sprite,
        public zIndex: number,
    ) {
        super(sprite, zIndex, ZombieEnemy.anims)
    }

    public static loadSprites(loader: Phaser.Loader.LoaderPlugin): void {
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
}