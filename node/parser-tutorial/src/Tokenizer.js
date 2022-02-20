/**
 * Tokenizer specification.
 * The order is very important.
 */
const Spec = [
    // Whitespace
    [/^\s+/, null],

    // Comments
    [/^\/\/.*/, null],
    [/^\/\*[\s\S]*?\*\//, null],

    // Symbols, delimiter: ;, {, }, (, )
    [/^;/, ';'],
    [/^\{/, '{'],
    [/^\}/, '}'],
    [/^\(/, '('],
    [/^\)/, ')'],
    [/^,/, ','],

    // Keywords: let...
    [/^\blet\b/, 'let'],
    [/^\bif\b/, 'if'],
    [/^\belse\b/, 'else'],
    [/^\btrue\b/, 'true'],
    [/^\bfalse\b/, 'false'],
    [/^\bnull\b/, 'null'],
    [/^\while\b/, 'while'],
    [/^\bdo\b/, 'do'],
    [/^\bfor\b/, 'for'],
    [/^\bdef\b/, 'def'],
    [/^\breturn\b/, 'return'],

    // Numbers: 1, 2, 3, 4...
    [/^\d+/, 'NUMBER'],

    // Identifiers
    [/^\w+/, 'IDENTIFIER'],

    // Equality operators: ==, !=
    [/^[=!]=/, 'EQUALITY_OPERATOR'],

    // Assignment operators: =, *=, /=, +=, -=
    [/^=/, 'SIMPLE_ASSIGN'],
    [/^[\*\/\+\-]=/, 'COMPLEX_ASSIGN'],

    // Math operators: +, -, *, /
    [/^[+\-]/, 'ADDITIVE_OPERATOR'],
    [/^[*\/]/, 'MULTIPLICATIVE_OPERATOR'],

    // Relational operators: >, >=, <, <=
    [/^[><]=?/, 'RELATIONAL_OPERATOR'],

    // Logical operators: &&, ||, !
    [/^&&/, 'LOGICAL_AND'],
    [/^\|\|/, 'LOGICAL_OR'],
    [/^!/, 'LOGICAL_NOT'],

    // Strings
    [/^"[^"]*"/, "STRING"],
    [/^'[^']*'/, "STRING"],
]

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

        for (const [regexp, tokenType] of Spec) {
            const tokenValue = this._match(regexp, string)

            if (tokenValue === null) {
                continue
            }

            // Should skip whitespace
            if (tokenType === null) {
                return this.getNextToken()
            }

            return {
                type: tokenType,
                value: tokenValue,
            }
        }

        throw new SyntaxError(`Unexpected token: "${string[0]}"`)
    }

    _match(regexp, string) {
        const matched = regexp.exec(string)

        if (matched === null) {
            return null
        }

        this._cursor += matched[0].length

        return matched[0]
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