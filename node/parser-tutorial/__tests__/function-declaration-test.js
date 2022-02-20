module.exports = test => {
    let code = `
        def square(x) {
            return x * x;
        }
    `

    test(code, {
        type: 'Program',
        body: [
            {
                type: 'FunctionDeclaration',
                name: {
                    type: 'Identifier',
                    name: 'square',
                },
                params: [
                    {
                        type: 'Identifier',
                        name: 'x',
                    },
                ],
                body: {
                    type: 'BlockStatement',
                    body: [
                        {
                            type: 'ReturnStatement',
                            argument: {
                                type: 'BinaryExpression',
                                operator: '*',
                                left: {
                                    type: 'Identifier',
                                    name: 'x',
                                },
                                right: {
                                    type: 'Identifier',
                                    name: 'x',
                                },
                            },
                        },
                    ],
                },
            },
        ],
    })

    code = `
        def square() {
            return;
        }
    `

    test(code, {
        type: 'Program',
        body: [
            {
                type: 'FunctionDeclaration',
                name: {
                    type: 'Identifier',
                    name: 'square',
                },
                params: [],
                body: {
                    type: 'BlockStatement',
                    body: [
                        {
                            type: 'ReturnStatement',
                            argument: null,
                        },
                    ],
                },
            },
        ],
    })

    test(`def square() {}`, {
        type: 'Program',
        body: [
            {
                type: 'FunctionDeclaration',
                name: {
                    type: 'Identifier',
                    name: 'square',
                },
                params: [],
                body: {
                    type: 'BlockStatement',
                    body: [],
                },
            },
        ],
    })

    test(`def square(age, size) {}`, {
        type: 'Program',
        body: [
            {
                type: 'FunctionDeclaration',
                name: {
                    type: 'Identifier',
                    name: 'square',
                },
                params: [
                    {
                        type: 'Identifier',
                        name: 'age',
                    },
                    {
                        type: 'Identifier',
                        name: 'size',
                    },
                ],
                body: {
                    type: 'BlockStatement',
                    body: [],
                },
            },
        ],
    })
}