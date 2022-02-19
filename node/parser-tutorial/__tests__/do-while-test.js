module.exports = test => {
    let code = `
        do {
            age -= 1;
        } while (age > 10);
    `

    test(code, {
        type: 'Program',
        body: [
            {
                type: 'DoWhileStatement',
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
            },
        ],
    })
}