module.exports = test => {
    test('-theSun;', {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'UnaryExpression',
                    operator: '-',
                    argument: {
                        type: 'Identifier',
                        name: 'theSun',
                    },
                },
            }
        ],
    })

    test('!freedom;', {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'UnaryExpression',
                    operator: '!',
                    argument: {
                        type: 'Identifier',
                        name: 'freedom',
                    },
                },
            }
        ],
    })
}