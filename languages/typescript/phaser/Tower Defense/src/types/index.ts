export type SoundKey
    = 'actionMusic'
    | 'arrowFlySound'
    | 'arrowHitSound'
    | 'buildingCompletedSound'

export type ImageKey
    = 'arrowTowerButton'
    | 'spawner'
    | 'map'
    | 'castle'
    | 'arrowProjectile'

export type SpriteKey
    = 'zombieWalk'
    | 'zombieDie'
    | 'zombieAttack'
    | 'arrowTowerIdle'

export type EnemySpriteKeys = {
    walk: SpriteKey
    die: SpriteKey
    attack: SpriteKey
}

export type EnemyAnimationKeys = {
<<<<<<< HEAD
    walk: 'enemyWalk',
    die: 'enemyDie',
    attack: 'enemyAttack',
=======
    walk: 'enemyWalk'
    die: 'enemyDie'
    attack: 'enemyAttack'
>>>>>>> origin/main
}