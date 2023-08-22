const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Load image and store it in `images` object
const images = {}
images.player = new Image()
images.player.src = 'assets/character.png'

const actions = ['up', 'right', 'jump', 'down right', 'up right', 'down']
const numberOfCharacters = 10

class Character {
    constructor(action) {
        this.width = 103.0625
        this.height = 113.125
        this.frameX = 3
        this.x = Math.random() * (canvas.width - this.width)
        this.y = Math.random() * (canvas.height - this.height)
        this.speed = (Math.random() * 5) + 3
        this.action = action

        if (this.action === 'right') {
            this.frameY = 3
            this.minFrame = 4
            this.maxFrame = 13
        } else if (this.action === 'up') {
            this.frameY = 0
            this.minFrame = 3
            this.maxFrame = 13
        } else if (this.action === 'jump') {
            this.frameY = 7
            this.minFrame = 0
            this.maxFrame = 9
        } else if (this.action === 'down right') {
            this.frameY = 4
            this.minFrame = 4
            this.maxFrame = 15
        } else if (this.action === 'up right') {
            this.frameY = 1
            this.minFrame = 3
            this.maxFrame = 14
        } else if (this.action === 'down') {
            this.frameY = 6
            this.minFrame = 0
            this.maxFrame = 12
        }
    }

    draw() {
        const sX = this.width * this.frameX
        const sY = this.height * this.frameY

        drawSprite(images.player, sX, sY, this.width, this.height, this.x, this.y, this.width, this.height)

        if (this.frameX < this.maxFrame) {
            this.frameX++
        } else {
            this.frameX = this.minFrame
        }
    }

    update() {
        if (this.action === 'right') {
            this.#runRight()
        } else if (this.action === 'up') {
            this.#runUp()
        } else if (this.action === 'down right') {
            this.#runDownRight()
        } else if (this.action === 'up right') {
            this.#runUpRight()
        } else if (this.action === 'down') {
            this.#runDown()
        }
    }

    #runRight() {
        if (this.x < canvas.width + this.width) {
            this.x += this.speed
        } else {
            this.x = 0 - this.width
            this.y = Math.random() * (canvas.height - this.height)
        }
    }

    #runUp() {
        if (this.y > 0 - this.height) {
            this.y -= this.speed
        } else {
            this.y = canvas.height + this.height
            this.x = Math.random() * (canvas.width - this.width)
        }
    }

    #runDown() {
        if (this.y < canvas.height + this.height) {
            this.y += this.speed
        } else {
            this.y = 0 - this.height
            this.x = Math.random() * (canvas.width - this.width)
        }
    }

    #runDownRight() {
        if (this.y > canvas.height + this.height && this.x > this.width + canvas.width) {
            this.x = 0 - this.height
            this.y = Math.random() * (canvas.width / 2)
        } else {
            this.x += this.speed
            this.y += this.speed
        }
    }

    #runUpRight() {
        if (this.y < 0 - this.height && this.x > this.width + canvas.width) {
            this.x = 0 - this.height
            this.y = Math.random() * (canvas.width / 2)
        } else {
            this.x += this.speed
            this.y -= this.speed
        }
    }
}

const characters = []

actions.forEach(action => {
    characters.push(new Character(action))
})

/**
 * @param {Image} img
 * @param {Number} sX Source X
 * @param {Number} sY Source Y
 * @param {Number} sW Source Width
 * @param {Number} sH Source Height
 * @param {Number} dX Destination X
 * @param {Number} dY Destination Y
 * @param {Number} dW Destination Width
 * @param {Number} dH Destination Height
 */
function drawSprite(img, sX, sY, sW, sH, dX, dY, dW, dH) {
    ctx.drawImage(img, sX, sY, sW, sH, dX, dY, dW, dH)
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    characters.forEach(char => {
        char.draw()
        char.update()
    })
}

window.onload = setInterval(animate, 1000 / 30)

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})