const makeTriangle = (m, n) => new Triangle(m, n).draw()

class Triangle {
    constructor(m, n) {
        this.m = m
        this.n = n
        this.totalNums = n - m + 1
    }

    draw() {
        const rowLength = this.getRowsAmount(2, 3)

        if (rowLength === null) {
            return ''
        }

        return ''
    }

    getRowsAmount(rowsAmount, numbers) {
        if ([0, 1, 2].includes(this.totalNums)) {
            return null
        }

        if (numbers > this.totalNums) {
            return null
        }

        if (numbers === this.totalNums) {
            return rowsAmount
        }

        const newRow = rowsAmount + 1

        return this.getRowsAmount(newRow, newRow + numbers)
    }
}

// function isValidNumber(m, n) {
//     const diff = n - m + 1
//     console.log(diff)

//     let valid = 3

//     for (let i = 3; i < diff; i++) {
//         if (valid === diff) {
//             return true
//         }

//         valid += i
//     }

//     return false
// }

function test(m, n, expect) {
    const res = makeTriangle(m, n)

    if (res !== expect) {
        console.error(`Failed! We expect:\n"${expect}"\nbut got:\n"${res}"\n`)
    } else {
        console.info('Success!')
    }
}

test(1, 12, '')
test(1, 100, '')
test(1, 3,
    ` 1
3 2`)
// test(1, 10,
//     `   1
//   9 2
//  8 0 3
// 7 6 5 4`)
// test(6, 20,
//     `    6
//     7 7
//    6 8 8
//   5 0 9 9
//  4 3 2 1 0`)