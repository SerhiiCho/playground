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
                    //
                },
            },
        ],
    })
}