function narcissistic(value) {
    const val = value.toString()
    const len = val.length

    const result = val.split('').reduce((prev, curr) => prev + Math.pow(curr, len), 0)

    return result === value
}

const testCases = [
    [7, true],
    [153, true],
    [122, false],
    [487, false],
]

for (let val of testCases) {
    const result = narcissistic(val[0])

    if (result !== val[1]) {
        console.error(`Value: "${val[0]}". Result must be "${val[1]}" but got "${result}"`)
    } else {
        console.log('Test passed!')
    }
}