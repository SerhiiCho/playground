/**
 * Main test runner
 */

const {Parser} = require('../src/Parser')
const assert = require('assert')

const tests = [
    require('./literal-test'),
    require('./statement-list-test'),
    require('./block-test'),
    require('./empty-statement-test'),
    require('./math-test'),
    require('./assignment-test'),
]

const parser = new Parser()

function exec() {
    const program = `
    23 = 42;
    `

    const ast = parser.parse(program)

    console.log(JSON.stringify(ast, null, 2))
}

// exec()

function test(program, expected) {
    const ast = parser.parse(program)
    assert.deepEqual(ast, expected)
}

tests.forEach(testRun => testRun(test))

console.log('All tests are passed!')