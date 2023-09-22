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
    {
        input: '13 + 12 - 5  =   20;',
        expect: [
            new Token(tokens.INT, '13'),
            new Token(tokens.PLUS, '+'),
            new Token(tokens.INT, '12'),
            new Token(tokens.MINUS, '-'),
            new Token(tokens.INT, '5'),
            new Token(tokens.ASSIGN, '='),
            new Token(tokens.INT, '20'),
            new Token(tokens.SEMI, ';'),
        ],
    },
    {
        input: '    2 * 3 / 2 = 3;',
        expect: [
            new Token(tokens.INT, '2'),
            new Token(tokens.MULTIPLY, '*'),
            new Token(tokens.INT, '3'),
            new Token(tokens.DIVIDE, '/'),
            new Token(tokens.INT, '2'),
            new Token(tokens.ASSIGN, '='),
            new Token(tokens.INT, '3'),
            new Token(tokens.SEMI, ';'),
        ],
    },
]