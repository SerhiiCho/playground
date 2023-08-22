module.exports = test => {
    test(`42;`, {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'NumericLiteral',
                    value: 42,
                },
            },
        ]
    })

    test(`"Hello";`, {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'StringLiteral',
                    value: 'Hello',
                },
            }
        ],
    })

    test(`'Hello';`, {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'StringLiteral',
                    value: 'Hello',
                },
            }
        ],
    })
}