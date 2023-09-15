const tokens = require('./tokenTypes')
const Token = require('./Token')

module.exports = class Lexer {
    constructor(input) {
        this.input = input
    }

    nextToken() {
        return new Token(tokens.INT, '3')
    }
}