// __tests__/index.js

const assert = require('assert')
const Lexer = require('../src/Lexer')
const lexerTests = require('./Lexer.test')

lexerTests.forEach(testCase => {
    const lex = new Lexer(testCase.input)

    testCase.expect.forEach(expectedToken => {
        assert.deepEqual(lex.nextToken(), expectedToken)
    })
})

console.info('\x1b[42m', 'All tests are passed!')