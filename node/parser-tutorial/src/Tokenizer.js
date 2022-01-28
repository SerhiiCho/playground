/**
 * Tokenizer class
 *
 * Lazily pulls a token from a stream
 */
class Tokenizer {
    /**
     * Initializes the string
     */
    init(string) {
        this._string = string
        this._cursor = 0
    }

    /**
     * Whether the tokenizer reached EOF
     */
    isEOF() {
        return this._cursor === this._string.length
    }

    /**
     * Whether we still have more tokens
     */
    hasMoreTokens() {
        return this._cursor < this._string.length
    }

    /**
     * Obtains next token
     */
    getNextToken() {
        if (!this.hasMoreTokens()) {
            return null
        }

        const string = this._string.slice(this._cursor)

        // Numbers:
        if (this._isNumber(string[0])) {
            let number = ''

            while (this._isNumber(string[this._cursor])) {
                number += string[this._cursor++]
            }

            return {
                type: 'NUMBER',
                value: number,
            }
        }

        // Strings:
        if (this._isQuote(string[0])) {
            let str = ''

            do {
                str += string[this._cursor++]
            } while (!this._isQuote(string[this._cursor]) && !this.isEOF())

            str += string[this._cursor++] // add " or ' character to the end

            return {
                type: 'STRING',
                value: str,
            }
        }
    }

    _isQuote(str) {
        return str === `"` || str === `'`
    }

    _isNumber(value) {
        return !Number.isNaN(Number(value))
    }
}

module.exports = {
    Tokenizer,
}