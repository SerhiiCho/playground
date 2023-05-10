const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const playerImages = {
    attack: {
        img: createImage('assets/player/attack.png'),
        frames: 11,
    },
    die: {
        img: createImage('assets/player/die.png'),
        frames: 14,
    },
    idleBlink: {
        img: createImage('assets/player/idle-blink.png'),
        frames: 11,
    },
    idle: {
        img: createImage('assets/player/idle.png'),
        frames: 11,
    },
    spell: {
        img: createImage('assets/player/spell.png'),
        frames: 17,
    },
    walk: {
        img: createImage('assets/player/walk.png'),
        frames: 11,
    },
}

function createImage(src) {
    const image = new Image()
    image.src = src
    return image
}

class Player {
    constructor() {
        this.width = 130
        this.height = 105
        this.frame = 0
        this.maxFrame = 6
        this.x = 0
        this.y = 0
        this.speed = 10

        /**
         * @type {'attack' | 'die' | 'idle-blink' | 'spell' | 'walk' }
         */
        this.animation = 'idle'

        /**
         * @type {'left' | 'right'}
         */
        this.direction = 'left'

        this.#animate()
    }

    draw() {
        this.maxFrame = playerImages[this.animation].frames

        if (this.frame < this.maxFrame) {
            this.frame++
        } else {
            this.frame = 0
        }

        const sX = this.frame * this.width

        ctx.drawImage(playerImages[this.animation].img, sX, 0, this.width, this.height, this.x, this.y, this.width, this.height)
    }

    update() {
        if (this.animation === 'walk') {
            if (this.direction === 'right') {
                this.x += this.speed
            } else if (this.direction === 'left') {
                this.x -= this.speed
            }
        }

        // if (this.animation === 'idle') {
        // } else if (this.animation === 'walk') {
        //     this.maxFrame = 7

        //     if (this.direction === 'right') {
        //         this.x += this.speed
        //     } else if (this.direction === 'left') {
        //         this.x -= this.speed
        //     }
        // }
    }

    #animate() {
        window.addEventListener('keydown', e => {
            if (e.key === 'ArrowRight') {
                this.frame = 0
                this.animation = 'walk'
                this.direction = 'right'
            } else if (e.key === 'ArrowLeft') {
                this.frame = 0
                this.animation = 'walk'
                this.direction = 'left'
            }
        })

        window.addEventListener('keyup', e => {
            this.frame = 0
            this.frameY = 0
            this.animation = 'idle'
        })
    }
}

const player = new Player()

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    player.draw()
    player.update()
}

window.onload = setInterval(animate, 1000 / 30)

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})