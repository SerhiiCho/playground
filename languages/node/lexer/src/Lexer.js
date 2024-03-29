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
        this.#skipWhitespace()

        let token = null

        if (this.char === ';') {
            token = new Token(tokens.SEMI, this.char)
        } else if (this.char === '+') {
            token = new Token(tokens.PLUS, this.char)
        } else if (this.char === '-') {
            token = new Token(tokens.MINUS, this.char)
        } else if (this.char === '*') {
            token = new Token(tokens.MULTIPLY, this.char)
        } else if (this.char === '/') {
            token = new Token(tokens.DIVIDE, this.char)
        } else if (this.char === '=') {
            token = this.#chooseEqualToken()
        } else if (this.#charIsNumber()) {
            return new Token(tokens.INT, this.#readNumber())
        } else if (this.#charIsLetter()) {
            return new Token(tokens.IDENT, this.#readIdentifier())
        } else {
            token = new Token(tokens.ILLEGAL, this.char)
        }

        this.#advanceChar()

        return token
    }

    #skipWhitespace() {
        while (this.char === ' ' || this.char === '\t' || this.char === '\n' || this.char === '\r') {
            this.#advanceChar()
        }
    }

    #charIsNumber() {
        return /^-?\d+$/.test(this.char)
    }

    #charIsLetter() {
        return /[a-z]/i.test(this.char)
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

    #readIdentifier() {
        let start = this.position

        while (this.#charIsLetter()) {
            this.#advanceChar()
        }

        return this.input.substring(start, this.position)
    }

    #peekChar() {
        if (this.nextPosition >= this.input.length) {
            return null
        }

        return this.input[this.nextPosition]
    }

    #chooseEqualToken() {
        if (this.#peekChar() == '=') {
            this.#advanceChar()
            return new Token(tokens.EQUAL, "==")
        }

        return new Token(tokens.ASSIGN, "=")
    }
}