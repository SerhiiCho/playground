class Player extends Sprite {
    /**
     * @param {{
     *     position: Position,
     *     velocity: Velocity,
     *     floorCollisionMap: CollisionBlock[],
     *     imageSrc: string,
     *     frameRate: number | undefined,
     *     scale: number | undefined,
     * }} params
     */
    constructor({ position, velocity, floorCollisionMap, imageSrc, frameRate, scale = .5 }) {
        super({ imageSrc, position, frameRate, scale })
        this.position = position
        this.velocity = velocity
        this.floorCollisionMap = floorCollisionMap
    }

    update() {
        this.draw()
        this.updateFrames()

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
                    this.position.y = block.position.y - this.height - 0.01
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
                    this.position.x = block.position.x - this.width - 0.01
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