module.exports = test => {
    // Simple variable declaration:
    test(`let x = 52;`, {
        type: 'Program',
        body: [
            {
                type: 'VariableStatement',
                declarations: [
                    {
                        type: 'VariableDeclaration',
                        id: {
                            type: 'Identifier',
                            name: 'x',
                        },
                        init: {
                            type: 'NumericLiteral',
                            value: 52,
                        },
                    },
                ],
            },
        ],
    })

    // Variable declaration, no initializer:
    test(`let x;`, {
        type: 'Program',
        body: [
            {
                type: 'VariableStatement',
                declarations: [
                    {
                        type: 'VariableDeclaration',
                        id: {
                            type: 'Identifier',
                            name: 'x',
                        },
                        init: null,
                    },
                ],
            },
        ],
    })

    // Multiple variable declarations, no initializer:
    test(`let annaKorot, serhiiCho;`, {
        type: 'Program',
        body: [
            {
                type: 'VariableStatement',
                declarations: [
                    {
                        type: 'VariableDeclaration',
                        id: {
                            type: 'Identifier',
                            name: 'annaKorot',
                        },
                        init: null,
                    },
                    {
                        type: 'VariableDeclaration',
                        id: {
                            type: 'Identifier',
                            name: 'serhiiCho',
                        },
                        init: null,
                    },
                ],
            },
        ],
    })

    // Multiple variable declarations, no initializer:
    test(`let nice, cool = 1234;`, {
        type: 'Program',
        body: [
            {
                type: 'VariableStatement',
                declarations: [
                    {
                        type: 'VariableDeclaration',
                        id: {
                            type: 'Identifier',
                            name: 'nice',
                        },
                        init: null,
                    },
                    {
                        type: 'VariableDeclaration',
                        id: {
                            type: 'Identifier',
                            name: 'cool',
                        },
                        init: {
                            type: 'NumericLiteral',
                            value: 1234,
                        },
                    },
                ],
            },
        ],
    })
}