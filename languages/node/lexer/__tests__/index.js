const assert = require('assert')
const Lexer = require('../src/Lexer')

const tests = [
    require('./intTest'),
]

tests.forEach(test => {
    const token = new Lexer(test.input).nextToken()
    assert.deepEqual(token, test.expect)
})

console.log('All tests are passed!')