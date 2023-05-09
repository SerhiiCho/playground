let canvas
let ctx
let flowField
let flowFieldAnimation

window.onload = () => {
    canvas = document.getElementById('canvas1')
    ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
    flowField.animate(0)
}

window.addEventListener('resize', () => {
    cancelAnimationFrame(flowFieldAnimation)

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
    flowField.animate(0)
})

const mouse = {
    x: undefined,
    y: undefined,
}

window.addEventListener('mousemove', e => {
    mouse.x = e.x
    mouse.y = e.y
})

class FlowFieldEffect {
    /**
     * @type {CanvasRenderingContext2D}
     */
    #ctx

    /**
     * @type {number}
     */
    #width

    /**
     * @type {number}
     */
    #height

    /**
     * @param {CanvasRenderingContext2D} ctx
     * @param {number} width
     * @param {number} height
     */
    constructor(ctx, width, height) {
        this.#ctx = ctx
        this.#ctx.strokeStyle = 'white'
        this.#ctx.lineWidth = 3

        this.#width = width
        this.#height = height

        this.lastTime = 0

        // Is the amount of time we want to wait before drawing a new frame
        this.interval = 1000 / 60 // 60 frames per second

        this.timer = 0
        this.cellSize = 15
    }

    /**
     * Used to draw a single frame of the animation
     *
     * @param {number} x
     * @param {number} y
     *
     * @returns {void}
     */
    #drawLine(x, y) {
        // We want to start drawing a new path
        this.#ctx.beginPath()

        // We want to start drawing at this point
        this.#ctx.moveTo(x, y)

        // We want to draw a line to this point
        this.#ctx.lineTo(x + 5, y + 5)

        // Draw the line
        this.#ctx.stroke()
    }

    animate(timeStamp) {
        const deltaTime = timeStamp - this.lastTime
        this.lastTime = timeStamp

        if (this.timer > this.interval) {
            this.#ctx.clearRect(0, 0, this.#width, this.#height)

            for (let y = 0; y < this.#height; y += this.cellSize) {
                for (let x = 0; x < this.#width; x += this.cellSize) {
                    this.#drawLine(x, y)
                }
            }

            this.timer = 0
        } else {
            this.timer += deltaTime
        }

        flowFieldAnimation = requestAnimationFrame(this.animate.bind(this))
    }
}