const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const gravity = .5

function createImage(src) {
    const image = new Image()
    image.src = src
    return image
}

const floorCollisionMap = []

collisions.floor.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol === 202) {
            floorCollisionMap.push(new CollisionBlock(
                new Position({
                    x: x * 16,
                    y: y * 16,
                }),
            ))
        }
    })
})

const platformCollisionMap = []

collisions.platforms.forEach((row, y) => {
    row.forEach((symbol, x) => {
        if (symbol === 202) {
            platformCollisionMap.push(new CollisionBlock(
                new Position({
                    x: x * 16,
                    y: y * 16,
                }),
            ))
        }
    })
})

const player = new Player({
    position: new Position({ x: 90, y: 0 }),
    velocity: new Velocity({ x: 0, y: 0, speed: 2 }),
    floorCollisionMap,
    imageSrc: '/assets/warrior/idle.png',
    frameRate: 8,
})

const background = new Sprite({
    imageSrc: '/assets/background.png',
    position: new Position({ x: 0, y: 0 }),
})

const scaledCanvas = new Dimension({
    width: canvas.width / 4,
    height: canvas.height / 4,
})

function animate() {
    ctx.fillStyle = 'gray'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    ctx.save()

    ctx.scale(4, 4)
    ctx.translate(0, -background.image.height + scaledCanvas.height)

    background.update()

    floorCollisionMap.forEach(block => block.update())
    platformCollisionMap.forEach(block => block.update())

    player.update()

    player.velocity.x = 0

    if (keys.ArrowRight.pressed) {
        player.velocity.x = player.velocity.speed
    } else if (keys.ArrowLeft.pressed) {
        player.velocity.x = -player.velocity.speed
    }

    ctx.restore()

    window.requestAnimationFrame(animate)
}

window.onload = animate

const keys = {
    ArrowRight: {
        pressed: false,
    },
    ArrowLeft: {
        pressed: false,
    },
}

window.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') {
        keys.ArrowRight.pressed = true
    } else if (e.key === 'ArrowLeft') {
        keys.ArrowLeft.pressed = true
    } else if (e.key === 'ArrowUp') {
        player.velocity.y = -8
    }
})

window.addEventListener('keyup', e => {
    if (e.key === 'ArrowRight') {
        keys.ArrowRight.pressed = false
    } else if (e.key === 'ArrowLeft') {
        keys.ArrowLeft.pressed = false
    }
})