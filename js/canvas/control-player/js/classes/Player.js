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
        ctx.fillStyle = 'red'
        ctx.fillRect(this.position.x, this.position.y, this.dimension.width, this.dimension.height)
    }

    update() {
        this.#draw()

        this.position.x += this.velocity.x

        this.#checkForHorizontalCollision()
        this.#applyGravity()
        this.#checkForVerticalCollision()
    }

    #applyGravity() {
        this.position.y += this.velocity.y
        this.velocity.y += gravity
    }

    #checkForVerticalCollision() {
        for (const block of this.floorCollisionMap) {
            if (collision(this, block)) {
                if (this.velocity.y > 0) {
                    this.velocity.y = 0
                    this.position.y = block.position.y - this.dimension.height - 0.01
                    break
                }

                if (this.velocity.y < 0) {
                    this.velocity.y = 0
                    this.position.y = block.position.y + block.height + 0.01
                    break
                }
            }
        }
    }

    #checkForHorizontalCollision() {
        for (const block of this.floorCollisionMap) {
            if (collision(this, block)) {
                if (this.velocity.x > 0) {
                    this.velocity.x = 0
                    this.position.x = block.position.x - this.dimension.width - 0.01
                    break
                }

                if (this.velocity.x < 0) {
                    this.velocity.x = 0
                    this.position.x = block.position.x + block.width + 0.01
                    break
                }
            }
        }
    }
}