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

export type Animations = {
    walk: SpriteKey
    die: SpriteKey
    attack: SpriteKey
}