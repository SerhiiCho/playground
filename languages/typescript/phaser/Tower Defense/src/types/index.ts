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

export type SpriteKey
    = 'zombieWalk'
    | 'zombieDie'
    | 'zombieAttack'

export type Animations = {
    walk: SpriteKey
    die: SpriteKey
    attack: SpriteKey
}