import type { Animations } from '@/types'
import Phaser from 'phaser'
import Enemy from '@/Models/Enemy/Enemy'
import zombieWalk from '@/assets/enemies/1.zombie/walk.png'
import zombieDie from '@/assets/enemies/1.zombie/die.png'
import zombieAttack from '@/assets/enemies/1.zombie/attack.png'

const distance = 135

export default class ZombieEnemy extends Enemy {
    public static anims: Animations = {
        walk: 'zombieWalk',
        die: 'zombieDie',
        attack: 'zombieAttack',
    }

    private constructor(
        public sprite: Phaser.GameObjects.Sprite,
        public zIndex: number,
    ) {
        super(sprite, zIndex, ZombieEnemy.anims)
    }

    public static preload(loader: Phaser.Loader.LoaderPlugin): void {
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

    public static spawn(amount: number, factory: Phaser.GameObjects.GameObjectFactory): ZombieEnemy[] {
        const result = []

        amount += 1

        for (let i = 1; i < amount; i++) {
            const x = -(i * distance)
            const y = 150

            const sprite = factory.sprite(x, y, ZombieEnemy.anims.walk)
            const zombie = new ZombieEnemy(sprite, i)

            zombie.create(x, y)
            result.push(zombie)
        }

        return result
    }
}
