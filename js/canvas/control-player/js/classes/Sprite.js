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