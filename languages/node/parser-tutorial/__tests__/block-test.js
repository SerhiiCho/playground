module.exports = test => {
    let code = `
        {
            33;
            "Serhii Cho";
        }
    `

    test(code, {
        type: 'Program',
        body: [
            {
                type: 'BlockStatement',
                body: [
                    {
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'NumericLiteral',
                            value: 33,
                        },
                    },
                    {
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'StringLiteral',
                            value: 'Serhii Cho',
                        },
                    },
                ],
            },
        ],
    })

    code = `
        {
        }
    `

    test(code, {
        type: 'Program',
        body: [
            {
                type: 'BlockStatement',
                body: [],
            },
        ],
    })

    code = `
        {
            77;
            {
                "Anna and Serhii";
            }
        }
    `

    test(code, {
        type: 'Program',
        body: [
            {
                type: 'BlockStatement',
                body: [
                    {
                        type: 'ExpressionStatement',
                        expression: {
                            type: 'NumericLiteral',
                            value: 77,
                        },
                    },
                    {
                        type: 'BlockStatement',
                        body: [
                            {
                                type: 'ExpressionStatement',
                                expression: {
                                    type: 'StringLiteral',
                                    value: 'Anna and Serhii',
                                },
                            },
                        ],
                    }
                ],
            },
        ],
    })
}