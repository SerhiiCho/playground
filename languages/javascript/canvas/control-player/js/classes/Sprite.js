class Sprite {
    /**
     * @param {{
     *     imageSrc: string,
     *     position: Position,
     *     frameRate: number | undefined,
     *     frameBuffer: number | undefined,
     * }} params
     */
    constructor({ imageSrc, position, frameRate = 1, frameBuffer = 3, scale = 1 }) {
        this.image = new Image()
        this.image.src = imageSrc
        this.image.onload = () => {
            this.width = (this.image.width / frameRate) * scale
            this.height = this.image.height * scale
        }

        this.scale = scale
        this.position = position
        this.frameRate = frameRate
        this.frameBuffer = frameBuffer
        this.currentFrame = 0
        this.elapsedFrames = 0
    }

    draw() {
        if (!this.image.complete) {
            return
        }

        const cropBox = this.#getCropBox()

        ctx.drawImage(
            this.image,
            cropBox.x,
            cropBox.y,
            cropBox.width,
            cropBox.height,
            this.position.x,
            this.position.y,
            this.width,
            this.height,
        )
    }

    update() {
        this.draw()
        this.updateFrames()
    }

    #getCropBox() {
        return {
            x: this.currentFrame * (this.image.width / this.frameRate),
            y: 0,
            width: this.image.width / this.frameRate,
            height: this.image.height,
        }
    }

    updateFrames() {
        if (this.frameRate === 1) {
            return
        }

        this.elapsedFrames++

        if (this.elapsedFrames % this.frameBuffer !== 0) {
            return
        }

        this.elapsedFrames = 0

        if (this.currentFrame < this.frameRate - 1) {
            this.currentFrame++
        } else {
            this.currentFrame = 0
        }
    }
}