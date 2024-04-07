export type SoundKey
    = 'actionMusic'
    | 'arrowFlySound'
    | 'arrowHitSound'
    | 'buildingCompletedSound'
    | 'buildingHitSound'

export type ImageKey
    = 'arrowTowerButton'
    | 'spawner'
    | 'map'
    | 'castle'
    | 'arrowProjectile'
    | 'magicBallProjectile'
    | 'magicTowerButton'

export type SpriteKey
    = 'zombieWalk'
    | 'zombieDie'
    | 'zombieAttack'
    | 'arrowTowerIdle'
    | 'magicTowerIdle'

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