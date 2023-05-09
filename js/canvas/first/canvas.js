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
    flowField.animate()
}

window.addEventListener('resize', () => {
    cancelAnimationFrame(flowFieldAnimation)

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
    flowField.animate()
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
        this.#width = width
        this.#height = height

        this.x = 0
        this.y = 0
    }

    /**
     * Used to draw a single frame of the animation
     *
     * @param {number} x
     * @param {number} y
     *
     * @returns {void}
     */
    #draw(x, y) {
        const lineLength = 100

        // We want to start drawing a new path
        this.#ctx.beginPath()

        // We want to start drawing at this point
        this.#ctx.moveTo(x, y)

        // We want to draw a line to this point
        this.#ctx.lineTo(x + lineLength, y + lineLength)

        // Draw the line
        this.#ctx.stroke()
    }

    animate() {
        this.#ctx.clearRect(0, 0, this.#width, this.#height)
        this.#draw(this.x, this.y)
        this.x += 1
        this.y += .5

        flowFieldAnimation = requestAnimationFrame(this.animate.bind(this))

        console.log('animating')
    }
}