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
    {
        input: '23 + 23 == 46;',
        expect: [
            new Token(tokens.INT, '23'),
            new Token(tokens.PLUS, '+'),
            new Token(tokens.INT, '23'),
            new Token(tokens.EQUAL, '=='),
            new Token(tokens.INT, '46'),
            new Token(tokens.SEMI, ';'),
        ],
    },
    {
        input: 'num = 46;',
        expect: [
            new Token(tokens.IDENT, 'num'),
            new Token(tokens.ASSIGN, '='),
            new Token(tokens.INT, '46'),
            new Token(tokens.SEMI, ';'),
        ],
    },
    {
        input: 'userAge = 22;',
        expect: [
            new Token(tokens.IDENT, 'userAge'),
            new Token(tokens.ASSIGN, '='),
            new Token(tokens.INT, '22'),
            new Token(tokens.SEMI, ';'),
        ],
    },
    {
        input: '!',
        expect: [new Token(tokens.ILLEGAL, '!')],
    },
    {
        input: `
            x = 42;
            y = 3;
            x + y == 45;
        `,
        expect: [
            new Token(tokens.IDENT, 'x'),
            new Token(tokens.ASSIGN, '='),
            new Token(tokens.INT, '42'),
            new Token(tokens.SEMI, ';'),
            new Token(tokens.IDENT, 'y'),
            new Token(tokens.ASSIGN, '='),
            new Token(tokens.INT, '3'),
            new Token(tokens.SEMI, ';'),
            new Token(tokens.IDENT, 'x'),
            new Token(tokens.PLUS, '+'),
            new Token(tokens.IDENT, 'y'),
            new Token(tokens.EQUAL, '=='),
            new Token(tokens.INT, '45'),
            new Token(tokens.SEMI, ';'),
        ],
    },
]