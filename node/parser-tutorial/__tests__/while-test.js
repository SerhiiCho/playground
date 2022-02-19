module.exports = test => {
    let code = `
        while (age > 10) {
            age -= 1;
        }
    `

    test(code, {
        type: 'Program',
        body: [
            {
                type: 'WhileStatement',
                test: {
                    type: 'BinaryExpression',
                    operator: '>',
                    left: {
                        type: 'Identifier',
                        name: 'age',
                    },
                    right: {
                        type: 'NumericLiteral',
                        value: 10,
                    },
                },
                body: {
                    type: 'BlockStatement',
                    body: [
                        {
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'AssignmentExpression',
                                operator: '-=',
                                left: {
                                    type: 'Identifier',
                                    name: 'age',
                                },
                                right: {
                                    type: 'NumericLiteral',
                                    value: 1,
                                },
                            },
                        },
                    ],
                },
            },
        ],
    })
}