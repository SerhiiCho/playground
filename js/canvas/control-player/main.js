const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = .5

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

class Position {
    /**
     * @param {{x: number, y: number}} params
     */
    constructor(params) {
        this.x = params.x
        this.y = params.y
    }
}

class Velocity {
    /**
     * @param {{ x: number, y: number, speed: number}} params
     */
    constructor(params) {
        this.x = params.x
        this.y = params.y
        this.speed = params.speed
    }
}

class Dimension {
    /**
     * @param {{ width: number, height: number }} params
     */
    constructor(params) {
        this.width = params.width
        this.height = params.height
    }
}

class Sprite {
    /**
     * @param {{ imageSrc: string, position: Position }} params
     */
    constructor(params) {
        this.image = new Image()
        this.image.src = params.imageSrc
        this.position = params.position
    }

    #draw() {
        if (!this.image.complete) {
            return
        }

        ctx.drawImage(this.image, this.position.x, this.position.y)
    }

    update() {
        this.#draw()
    }
}

class Player {
    /**
     *
     * @param {Position} position
     * @param {Velocity} velocity
     * @param {Dimension} dimension
     */
    constructor(position, velocity, dimension) {
        this.position = position
        this.velocity = velocity
        this.dimension = dimension
    }

    #draw() {
        ctx.drawImage(
            playerImages.idle.img,
            0,
            0,
            this.dimension.width,
            this.dimension.height,
            this.position.x,
            this.position.y,
            this.dimension.width,
            this.dimension.height,
        )
    }

    update() {
        this.#draw()

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        if (this.#isAboveTheGround()) {
            this.velocity.y += gravity
        } else {
            this.velocity.y = 0
        }
    }

    #isAboveTheGround() {
        return (this.position.y + this.dimension.height + this.velocity.y) < canvas.height
    }
}

const player = new Player(
    new Position({ x: 100, y: 100 }),
    new Velocity({ x: 0, y: 1, speed: 3 }),
    new Dimension({ width: 130, height: 105 }),
)

const background = new Sprite({
    imageSrc: '/assets/background.png',
    position: new Position({ x: 0, y: 0 }),
})

const scaledCanvas = new Dimension({
    width: canvas.width / 4,
    height: canvas.height / 4,
})

function animate() {
    ctx.fillStyle = 'gray'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.save()
    ctx.scale(4, 4)
    ctx.translate(0, -background.image.height + scaledCanvas.height)
    background.update()
    ctx.restore()

    player.update()

    player.velocity.x = 0

    if (keys.ArrowRight.pressed) {
        player.velocity.x = player.velocity.speed
    } else if (keys.ArrowLeft.pressed) {
        player.velocity.x = -player.velocity.speed
    }

    window.requestAnimationFrame(animate)
}

window.onload = animate

const keys = {
    ArrowRight: {
        pressed: false,
    },
    ArrowLeft: {
        pressed: false,
    },
}

window.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
        keys.ArrowRight.pressed = true
    } else if (e.key === 'ArrowLeft') {
        keys.ArrowLeft.pressed = true
    } else if (e.key === 'ArrowUp' && player.velocity.y === 0) {
        player.velocity.y = -15
    }
})

window.addEventListener('keyup', e => {
    if (e.key === 'ArrowRight') {
        keys.ArrowRight.pressed = false
    } else if (e.key === 'ArrowLeft') {
        keys.ArrowLeft.pressed = false
    }
})