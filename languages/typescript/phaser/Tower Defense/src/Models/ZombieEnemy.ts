import type { Animations } from '@/types'
import Phaser from 'phaser'
import Enemy from '@/Models/Enemy'

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
}