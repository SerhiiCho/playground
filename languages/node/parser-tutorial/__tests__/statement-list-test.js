module.exports = test => {
    const code = `
        "Anna Korotchaeva";
        25;
    `

    test(code, {
        type: 'Program',
        body: [
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'StringLiteral',
                    value: 'Anna Korotchaeva',
                },
            },
            {
                type: 'ExpressionStatement',
                expression: {
                    type: 'NumericLiteral',
                    value: 25,
                },
            },
        ],
    })
}