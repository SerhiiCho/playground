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
    require('./variable-test'),
    require('./if-test'),
    require('./relational-test'),
    require('./equality-test'),
    require('./logical-test'),
    require('./unary-test'),
    require('./while-test'),
    require('./do-while-test'),
    require('./for-test'),
    require('./function-declaration-test'),
    require('./member-test'),
    require('./call-test'),
    require('./class-test'),
]

const parser = new Parser()

function exec() {
    const program = `
        let s = "Hello, world!";
        let i = 0;

        while (i < s.length) {
            console.log(i, s[i]);
            i += 1;
        }
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