class Position {
    /**
     * @param {{x: number, y: number}} params
     */
    constructor(params) {
        this.x = params.x
        this.y = params.y
    }
}

class Velocity {
    /**
     * @param {{ x: number, y: number, speed: number}} params
     */
    constructor(params) {
        this.x = params.x
        this.y = params.y
        this.speed = params.speed
    }
}

class Dimension {
    /**
     * @param {{ width: number, height: number }} params
     */
    constructor(params) {
        this.width = params.width
        this.height = params.height
    }
}