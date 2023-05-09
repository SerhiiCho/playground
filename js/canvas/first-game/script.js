const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

// Load image and store it in `images` object
const images = {}
images.player = new Image()
images.player.src = 'assets/character.png'

const characters = []
characters.push(new Character())

class Character {
    playerWidth = 103.0625
    playerHeight = 113.125
    x = 0
    y = 0
    frameX = 3
    frameY = 3
    speed
    action

    constructor() {
        this.speed = (Math.random() * 1.5) + 3.5
        this.action = 'right'
    }

    draw() {
        const sX = this.playerWidth * this.frameX
        const sY = this.playerHeight * this.frameY

        drawSprite(images.player, sX, sY, this.width, this.height, this.x, this.y, this.width, this.height)

        if (this.frameX < 13) {
            this.frameX++
        } else {
            this.frameX = 3
        }
    }

    update() {
        if (this.action === 'right') {
            this.#runRight()
        }
    }

    #runRight() {
        if (this.x < canvas.width - this.width) {
            this.x += this.speed
        } else {
            this.x = 0 - this.width
        }
    }
}

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

window.onload = setInterval(animate, 1000 / 20)

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
})