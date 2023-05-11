class Player {
    /**
     *
     * @param {Position} position
     * @param {Velocity} velocity
     * @param {Dimension} dimension
     * @param {CollisionBlock[]} floorCollisionMap
     */
    constructor(position, velocity, dimension, floorCollisionMap) {
        this.position = position
        this.velocity = velocity
        this.dimension = dimension
        this.floorCollisionMap = floorCollisionMap
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
        return this.position.y + this.dimension.height < canvas.height
    }
}