module.exports = test => {
    test(`2 + 2;`, {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'BinaryExpression',
                    operator: '+',
                    left: {
                        type: 'NumericLiteral',
                        value: 2,
                    },
                    right: {
                        type: 'NumericLiteral',
                        value: 2,
                    },
                },
            },
        ],
    })

    // left: 3 + 2
    // right: 2
    test(`3 + 2 - 2;`, {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'BinaryExpression',
                    operator: '-',
                    left: {
                        type: 'BinaryExpression',
                        operator: '+',
                        left: {
                            type: 'NumericLiteral',
                            value: 3,
                        },
                        right: {
                            type: 'NumericLiteral',
                            value: 2,
                        },
                    },
                    right: {
                        type: 'NumericLiteral',
                        value: 2,
                    },
                },
            },
        ],
    })

    test(`3 * 2;`, {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'BinaryExpression',
                    operator: '*',
                    left: {
                        type: 'NumericLiteral',
                        value: 3,
                    },
                    right: {
                        type: 'NumericLiteral',
                        value: 2,
                    },
                },
            },
        ],
    })

    test(`2 + 2 * 2;`, {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'BinaryExpression',
                    operator: '+',
                    left: {
                        type: 'NumericLiteral',
                        value: 2,
                    },
                    right: {
                        type: 'BinaryExpression',
                        operator: '*',
                        left: {
                            type: 'NumericLiteral',
                            value: 2,
                        },
                        right: {
                            type: 'NumericLiteral',
                            value: 2,
                        },
                    },
                },
            },
        ],
    })

    test(`2 * 3 * 4;`, {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'BinaryExpression',
                    operator: '*',
                    left: {
                        type: 'BinaryExpression',
                        operator: '*',
                        left: {
                            type: 'NumericLiteral',
                            value: 2,
                        },
                        right: {
                            type: 'NumericLiteral',
                            value: 3,
                        },
                    },
                    right: {
                        type: 'NumericLiteral',
                        value: 4,
                    },
                },
            },
        ],
    })

    test(`(2 + 1) * 3;`, {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'BinaryExpression',
                    operator: '*',
                    left: {
                        type: 'BinaryExpression',
                        operator: '+',
                        left: {
                            type: 'NumericLiteral',
                            value: 2,
                        },
                        right: {
                            type: 'NumericLiteral',
                            value: 1,
                        },
                    },
                    right: {
                        type: 'NumericLiteral',
                        value: 3,
                    },
                },
            },
        ],
    })

    test(`(2);`, {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'NumericLiteral',
                    value: 2,
                },
            },
        ],
    })

    test(`(2 / 1);`, {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'BinaryExpression',
                    operator: '/',
                    left: {
                        type: 'NumericLiteral',
                        value: 2,
                    },
                    right: {
                        type: 'NumericLiteral',
                        value: 1,
                    },
                },
            },
        ],
    })

    test(`2 - 3;`, {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'BinaryExpression',
                    operator: '-',
                    left: {
                        type: 'NumericLiteral',
                        value: 2,
                    },
                    right: {
                        type: 'NumericLiteral',
                        value: 3,
                    },
                },
            },
        ],
    })
}