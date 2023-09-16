const tokens = require('../src/tokenTypes')
const Token = require('../src/Token')

module.exports = [
    // {
    //     input: '3',
    //     expect: [new Token(tokens.INT, '3')],
    // },
    {
        input: '1001;',
        expect: [
            new Token(tokens.INT, '1001'),
            new Token(tokens.SEMI, ';'),
        ],
    },
]