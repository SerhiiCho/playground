const assert = require('assert')
const Lexer = require('../src/Lexer')
const lexerTests = require('./Lexer.test')

lexerTests.forEach(testCase => {
    const lex = new Lexer(testCase.input)

    testCase.expect.forEach(expectedToken => {
        assert.deepEqual(lex.nextToken(), expectedToken)
    })
})

console.log('All tests are passed!')