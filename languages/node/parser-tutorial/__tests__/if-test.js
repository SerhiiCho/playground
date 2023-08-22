module.exports = test => {
    let code = `
        if (x) {
            x = 1;
        } else {
            x = 2;
        }
    `

    test(code, {
        type: 'Program',
        body: [
            {
                type: 'IfStatement',
                test: {
                    type: 'Identifier',
                    name: 'x',
                },
                consequent: {
                    type: 'BlockStatement',
                    body: [
                        {
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'AssignmentExpression',
                                operator: '=',
                                left: {
                                    type: 'Identifier',
                                    name: 'x',
                                },
                                right: {
                                    type: 'NumericLiteral',
                                    value: 1,
                                },
                            },
                        },
                    ],
                },
                alternate: {
                    type: 'BlockStatement',
                    body: [
                        {
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'AssignmentExpression',
                                operator: '=',
                                left: {
                                    type: 'Identifier',
                                    name: 'x',
                                },
                                right: {
                                    type: 'NumericLiteral',
                                    value: 2,
                                },
                            },
                        },
                    ],
                },
            },
        ],
    })

    code = `
        if (name) {
            name = "Anna";
        }
    `

    test(code, {
        type: 'Program',
        body: [
            {
                type: 'IfStatement',
                test: {
                    type: 'Identifier',
                    name: 'name',
                },
                consequent: {
                    type: 'BlockStatement',
                    body: [
                        {
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'AssignmentExpression',
                                operator: '=',
                                left: {
                                    type: 'Identifier',
                                    name: 'name',
                                },
                                right: {
                                    type: 'StringLiteral',
                                    value: 'Anna',
                                },
                            },
                        },
                    ],
                },
                alternate: null,
            },
        ],
    })

    code = `
        if (waves)
            waves = 2;
    `

    test(code, {
        type: 'Program',
        body: [
            {
                type: 'IfStatement',
                test: {
                    type: 'Identifier',
                    name: 'waves',
                },
                consequent: {
                    type: 'ExpressionStatement',
                    expression: {
                        type: 'AssignmentExpression',
                        operator: '=',
                        left: {
                            type: 'Identifier',
                            name: 'waves',
                        },
                        right: {
                            type: 'NumericLiteral',
                            value: 2,
                        },
                    },
                },
                alternate: null,
            },
        ],
    })

    code = `
        if (age) {
            age = 32;

            if (name)
                name = 'Anna';
        }
    `

    test(code, {
        type: 'Program',
        body: [
            {
                type: 'IfStatement',
                test: {
                    type: 'Identifier',
                    name: 'age',
                },
                consequent: {
                    type: 'BlockStatement',
                    body: [
                        {
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'AssignmentExpression',
                                operator: '=',
                                left: {
                                    type: 'Identifier',
                                    name: 'age',
                                },
                                right: {
                                    type: 'NumericLiteral',
                                    value: 32,
                                },
                            },
                        },
                        {
                            type: 'IfStatement',
                            test: {
                                type: 'Identifier',
                                name: 'name',
                            },
                            consequent: {
                                type: 'ExpressionStatement',
                                expression: {
                                    type: 'AssignmentExpression',
                                    operator: '=',
                                    left: {
                                        type: 'Identifier',
                                        name: 'name',
                                    },
                                    right: {
                                        type: 'StringLiteral',
                                        value: 'Anna',
                                    },
                                }
                            },
                            alternate: null,
                        },
                    ],
                },
                alternate: null,
            },
        ],
    })

    code = `
    if (age >= 18) {
        status = 'Can drink alcohol';
    }
    `

    test(code, {
        type: 'Program',
        body: [
            {
                type: 'IfStatement',
                test: {
                    type: 'BinaryExpression',
                    operator: '>=',
                    left: {
                        type: 'Identifier',
                        name: 'age',
                    },
                    right: {
                        type: 'NumericLiteral',
                        value: 18,
                    },
                },
                consequent: {
                    type: 'BlockStatement',
                    body: [
                        {
                            type: 'ExpressionStatement',
                            expression: {
                                type: 'AssignmentExpression',
                                operator: '=',
                                left: {
                                    type: 'Identifier',
                                    name: 'status',
                                },
                                right: {
                                    type: 'StringLiteral',
                                    value: 'Can drink alcohol',
                                },
                            },
                        },
                    ],
                },
                alternate: null,
            },
        ],
    })
}