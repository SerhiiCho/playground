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

        const triangles = this.generateTriangles(this.m, rowLength)
        const toRows = this.toRows(triangles)

        return ''
    }

    toRows(triangles) {
        const rows = []

        const leftSideMemory = []

        for (let triangle of triangles) {
            rows.push(this.createRow(triangle))
        }

        return rows
    }

    createRow(triangle) {
        const result = []
        const right = triangle[0]
        const bottom = triangle[1]
        const left = triangle[2]

        right.forEach(r => result.push([r]))
        bottom.forEach(b => result[result.length - 1].unshift(b))
        console.log(result)

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