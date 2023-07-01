const xPlayer = 1
const oPlayer = 2
const _ = 0
const x = 1
const o = 2
const draw = 0
const notFinished = -1

function isSolved(board) {
    const xWon = hasWon(xPlayer, board)
    const oWon = hasWon(oPlayer, board)
    const hasEmpty = hasEmptySpots(board)

    if (!xWon && !oWon && !hasEmpty)
        return draw

    if (xWon)
        return xPlayer

    return oWon ? oPlayer : notFinished
}

function hasWon(player, board) {
    const lines = [
        // horizontally
        [board[0][0], board[0][1], board[0][2]],
        [board[1][0], board[1][1], board[1][2]],
        [board[2][0], board[2][1], board[2][2]],
        // vertically
        [board[0][0], board[1][0], board[2][0]],
        [board[0][1], board[1][1], board[2][1]],
        [board[0][2], board[1][2], board[2][2]],
        // diagonally
        [board[0][0], board[1][1], board[2][2]],
        [board[0][2], board[1][1], board[2][0]],
    ]

    const correctLine = [player, player, player].toString()

    return lines.some(line => line.toString() === correctLine)
}

const hasEmptySpots = board => board.some(line => line.includes(_))

const result = isSolved([[0, 0, 1], [0, 1, 2], [2, 1, 0]])

if (result !== -1) {
    console.error('Test failed!')
} else {
    console.log('Test passes!')
}