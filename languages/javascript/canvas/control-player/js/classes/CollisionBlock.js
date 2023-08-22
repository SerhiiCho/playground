class CollisionBlock {
    /**
     *
     * @param {Position} position
     */
    constructor(position) {
        this.position = position
        this.width = 16
        this.height = 16
    }

    #draw() {
        ctx.fillStyle = 'rgba(255, 0, 0, 0.5)'
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        this.#draw()
    }
}