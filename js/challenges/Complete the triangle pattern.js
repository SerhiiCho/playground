const makeTriangle = (m, n) => new Triangle(m, n).draw()

class Triangle {
    constructor(m, n) {
        this.m = m
        this.n = n
        this.totalNums = n - m + 1
        this.memory = []
        this.rowLength = 0
    }

    draw() {
        this.rowLength = this.getRowsAmount(2, 3)

        if (this.rowLength === null) {
            return ''
        }

        const triangles = this.generateTriangles(this.m, this.rowLength)
        const toRows = this.toRows(triangles)

        return ''
    }

    toRows(triangles) {
        const parts = []

        triangles.forEach((triangle, index) => {
            parts.push(this.createPart(triangle, index))
        })

        let firstPart = parts[0]

        for (let i = 1; i < parts.length; i++) {
            firstPart = this.addToFirstPart(firstPart, parts[i], firstPart.length - 2)
        }

        console.log(firstPart)

        return parts
    }

    addToFirstPart(firstPart, part, index) {
        part = part.reverse()

        for (let row of part) {
            firstPart[index].unshift(...row)
            index--
        }

        return firstPart
    }

    createPart(triangle, index) {
        const result = []
        const right = triangle[0]
        const bottom = triangle[1] || []
        const left = triangle[2] || []

        right.forEach(r => result.push([r]))
        bottom.forEach(b => result[result.length - 1].unshift(b))

        const leftNums = []

        for (let pos = this.rowLength - 2 - index, i = 0; i < left.length; pos--, i++) {
            leftNums.push({ num: left[i], pos })
        }

        this.memory.push(leftNums)

        return result
    }

    generateTriangles(startFrom, rowLength) {
        const result = []
        let endWith = startFrom + rowLength - 1

        const triangle = []

        for (let i = 0; i < 3; i++) {
            triangle.push(this.addNumbers(startFrom, endWith))

            rowLength -= 1
            startFrom += rowLength + 1
            endWith += rowLength
        }

        result.push(triangle)

        if (rowLength === 1) {
            result.push([[startFrom % 10]])
        } else if (rowLength > 1) {
            result.push(...this.generateTriangles(startFrom, rowLength))
        }

        return result
    }

    addNumbers(from, to) {
        const result = []

        for (let i = from; i <= to; i++) {
            result.push(i % 10)
        }

        return result
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

function test(m, n, expect) {
    const res = makeTriangle(m, n)

    if (res !== expect) {
        console.error(`Failed! We expect:\n"${expect}"\nbut got:\n"${res}"\n`)
    } else {
        console.info('Success!')
    }
}

console.log('<-------- START -------->')

// test(1, 12, '')
// test(1, 100, '')
// test(1, 3,
//     ` 1
// 3 2`)
// test(1, 10,
//     `   1
//   9 2
//  8 0 3
// 7 6 5 4`)
test(6, 20,
    `    6
   7 7
  6 8 8
 5 0 9 9
4 3 2 1 0`)
// test(1, 21,
//     `     1
//     5 2
//    4 6 3
//   3 1 7 4
//  2 0 9 8 5
// 1 0 9 8 7 6`)
// test(1, 28,
//     `      1
//      8 2
//     7 9 3
//    6 7 0 4
//   5 6 8 1 5
//  4 5 4 3 2 6
// 3 2 1 0 9 8 7`)
// test(1, 36,
//     `       1
//       1 2
//      0 2 3
//     9 3 3 4
//    8 2 4 4 5
//   7 1 6 5 5 6
//  6 0 9 8 7 6 7
// 5 4 3 2 1 0 9 8`)
// test(1, 45,
//     `        1
//        4 2
//       3 5 3
//      2 9 6 4
//     1 8 0 7 5
//    0 7 5 1 8 6
//   9 6 4 3 2 9 7
//  8 5 4 3 2 1 0 8
// 7 6 5 4 3 2 1 0 9`)

console.log('<-------- END -------->')