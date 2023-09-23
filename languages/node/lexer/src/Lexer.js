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
            token = new Token(tokens.ASSIGN, this.char)
        } else if (this.#charIsNumber()) {
            return new Token(tokens.INT, this.#readNumber())
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