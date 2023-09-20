const tokens = require('./tokenTypes')
const Token = require('./Token')

// src/Lexer.js

module.exports = class {
    constructor(input) {
        this.input = input
        this.position = 0
        this.nextPosition = 1
        this.char = input[0] || ''
    }

    nextToken() {
        let token = null

        if (this.char === ';') {
            token = new Token(tokens.SEMI, this.char)
        } else if (this.#charIsNumber()) {
            return new Token(tokens.INT, this.#readNumber())
        }

        this.#advanceChar()

        return token
    }

    #charIsNumber() {
        return this.char && !isNaN(this.char)
    }

    #advanceChar() {
        if (this.nextPosition >= this.input.length) {
            this.char = ''
        } else {
            this.char = this.input[this.nextPosition]
        }

        this.position = this.nextPosition
        this.nextPosition += 1
    }

    #readNumber() {
        let start = this.position

        while (this.#charIsNumber()) {
            this.#advanceChar()
        }

        return this.input.substring(start, this.position)
    }
}