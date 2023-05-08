window.onload = () => {
    const canvas = document.getElementById('canvas1')
    const ctx = canvas.getContext('2d')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const flowField = new FlowFieldEffect(ctx, canvas.width, canvas.height)
    flowField.animate()
}

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
        this.#width = width
        this.#height = height
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
        this.#ctx.strokeStyle = 'white'

        this.#draw(150, 150)
        this.#draw(300, 300)
    }
}