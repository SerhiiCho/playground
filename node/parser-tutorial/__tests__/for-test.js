module.exports = test => {
    let code = `
        for (let i = 0; i < 10; i += 1) {
            x += i;
        }
    `

    test(code, {
        type: 'Program',
        body: [
            {
                type: 'ForStatement',
                init: {
                    type: 'VariableStatement',
                    declarations: [
                        {
                            type: 'VariableDeclaration',
                            id: {
                                type: 'Identifier',
                                name: 'i',
                            },
                            init: {
                                type: 'NumericLiteral',
                                value: 0,
                            },
                        },
                    ],
                },
                test: {
                    type: 'BinaryExpression',
                    operator: '<',
                    left: {
                        type: 'Identifier',
                        name: 'i',
                    },
                    right: {
                        type: 'NumericLiteral',
                        value: 10,
                    },
                },
                update: {
                    type: 'AssignmentExpression',
                    operator: '+=',
                    left: {
                        type: 'Identifier',
                        name: 'i',
                    },
                    right: {
                        type: 'NumericLiteral',
                        value: 1,
                    },
                },
                body: {
                    type: 'BlockStatement',
                    body: [
                        {
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'AssignmentExpression',
                                operator: '+=',
                                left: {
                                    type: 'Identifier',
                                    name: 'x'
                                },
                                right: {
                                    type: 'Identifier',
                                    name: 'i',
                                },
                            },
                        },
                    ],
                },
            },
        ],
    })

    test(`for (; ;) {}`, {
        type: 'Program',
        body: [
            {
                type: 'ForStatement',
                init: null,
                test: null,
                update: null,
                body: {
                    type: 'BlockStatement',
                    body: [],
                },
            },
        ],
    })

    code = `
        for (let i = 0, z = 1; ;) {
        }
    `

    test(code, {
        type: 'Program',
        body: [
            {
                type: 'ForStatement',
                init: {
                    type: 'VariableStatement',
                    declarations: [
                        {
                            type: 'VariableDeclaration',
                            id: {
                                type: 'Identifier',
                                name: 'i',
                            },
                            init: {
                                type: 'NumericLiteral',
                                value: 0,
                            },
                        },
                        {
                            type: 'VariableDeclaration',
                            id: {
                                type: 'Identifier',
                                name: 'z',
                            },
                            init: {
                                type: 'NumericLiteral',
                                value: 1,
                            },
                        },
                    ],
                },
                test: null,
                update: null,
                body: {
                    type: 'BlockStatement',
                    body: [],
                },
            },
        ],
    })

    code = `
        for (i = 0; ;) {
        }
    `

    test(code, {
        type: 'Program',
        body: [
            {
                type: 'ForStatement',
                init: {
                    type: 'AssignmentExpression',
                    operator: '=',
                    left: {
                        type: 'Identifier',
                        name: 'i',
                    },
                    right: {
                        type: 'NumericLiteral',
                        value: 0,
                    },
                },
                test: null,
                update: null,
                body: {
                    type: 'BlockStatement',
                    body: [],
                },
            },
        ],
    })
}