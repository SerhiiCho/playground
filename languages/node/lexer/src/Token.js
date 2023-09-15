module.exports = class Token {

    /**
     * @param {string} type Token type (e.g. tokens.INT, tokens.PLUS)
     * @param {string} literal Token literal (e.g. '3', '+')
     */
    constructor(type, literal) {
        this.type = type
        this.literal = literal
    }
}