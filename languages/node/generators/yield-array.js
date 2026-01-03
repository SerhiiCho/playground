const arr = [1, 2, 3, 4]

function* getNumbs() {
    for (const num of arr) {
        yield num
    }
}

for (const num of getNumbs()) {
    console.log(num)
}
