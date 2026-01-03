function* countToThree() {
    yield 1
    yield 2
    yield 3
}

function* countToFive() {
    yield* countToThree() // Delegate to countToThree
    yield 4
    yield 5
}

for (const num of countToFive()) {
    console.log(num)
}
