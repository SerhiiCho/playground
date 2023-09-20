const tokens = require('../src/tokenTypes')
const Token = require('../src/Token')

// __tests__/Lexer.test.js

module.exports = [
    {
        input: '3',
        expect: [new Token(tokens.INT, '3')],
    },
    {
        input: '1001;',
        expect: [
            new Token(tokens.INT, '1001'),
            new Token(tokens.SEMI, ';'),
        ],
    },
    {
        input: ';456',
        expect: [
            new Token(tokens.SEMI, ';'),
            new Token(tokens.INT, '456'),
        ],
    },
]