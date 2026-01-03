const getNumbs = function* () {
    yield 1
    yield 2
    yield 3
    yield 4
}

for (const num of getNumbs()) {
    console.log(num)
}
