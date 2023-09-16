const tokens = require('./tokenTypes')
const Token = require('./Token')

module.exports = class Lexer {
    constructor(input) {
        this.input = input
        this.position = 0
        this.nextPosition = 0
        this.char = ''
        this.#advanceChar()
    }

    nextToken() {
        let token = null

        switch (this.char) {
            case ';':
                token = new Token(tokens.SEMI, ';')
            default:
                if (this.#charIsNumber()) {
                    return new Token(tokens.INT, this.#readNumber())
                }
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
            console.log(this.position, this.nextPosition)
            this.#advanceChar()
        }

        return this.input.substring(start, this.position)
    }
}