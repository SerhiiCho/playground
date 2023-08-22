module.exports = test => {
    test(`age > 18;`, {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'BinaryExpression',
                    operator: '>',
                    left: {
                        type: 'Identifier',
                        name: 'age',
                    },
                    right: {
                        type: 'NumericLiteral',
                        value: 18,
                    },
                },
            },
        ],
    })
}