import type { EnemySpriteKeys } from '@/types'
import Enemy from '@/Models/Enemy/Enemy'
import zombieWalk from '@/assets/enemies/1.zombie/walk.png'
import zombieDie from '@/assets/enemies/1.zombie/die.png'
import zombieAttack from '@/assets/enemies/1.zombie/attack.png'
import GameScene from '@/Scenes/GameScene'

const distance = 135

export default class ZombieEnemy extends Enemy {
    public static spriteKeys: EnemySpriteKeys = {
        walk: 'zombieWalk',
        die: 'zombieDie',
        attack: 'zombieAttack',
    }

    private constructor(
        public readonly scene: GameScene,
        public readonly zIndex: number,
        public readonly x: number,
        public readonly y: number,
    ) {
        super(scene, x, y, zIndex, ZombieEnemy.spriteKeys)
    }

    public static preload(scene: GameScene): void {
        scene.load.spritesheet(ZombieEnemy.spriteKeys.walk, zombieWalk, {
            frameWidth: 107.5,
            frameHeight: 130,
        })

        scene.load.spritesheet(ZombieEnemy.spriteKeys.die, zombieDie, {
            frameWidth: 165.5,
            frameHeight: 130,
        })

        scene.load.spritesheet(ZombieEnemy.spriteKeys.attack, zombieAttack, {
            frameWidth: 104,
            frameHeight: 130,
        })
    }

    public static spawn(amount: number, scene: GameScene): ZombieEnemy[] {
        const result = []

        amount += 1

        for (let i = 1; i < amount; i++) {
            const x = -(i * distance)
            const y = 150

            const zombie = new ZombieEnemy(scene, i, x, y)
            zombie.create()

            result.push(zombie)
        }

        return result
    }
}
