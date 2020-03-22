const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

c.fillStyle = 'rgba(255, 0, 0, 0.5)'
c.fillRect(100, 100, 100, 100) // x, y, width, height
c.fillStyle = 'rgba(0, 0, 255, 0.5)'
c.fillRect(400, 100, 50, 50)
c.fillStyle = 'rgba(0, 255, 0, 0.5)'
c.fillRect(300, 300, 170, 80)

// Line
c.beginPath();
c.moveTo(10, 10) // x, y // Start of the line
c.lineTo(300, 10)
c.lineTo(300, 270)
c.lineTo(10, 270)
c.lineTo(10, 10)
c.strokeStyle = 'brown'
c.stroke()

// Arc / Circle
// c, y, radius, startAngle, endAngle, drawCounterClockwise
const circles = [
    {
        x: 300,
        y: 300
    },
    {
        x: 150,
        y: 350
    },
    {
        x: 490,
        y: 300
    },
]

circles.forEach(circle => {
    c.beginPath()
    c.arc(circle.x, circle.y, 50, 0, Math.PI * 2, false)
    c.strokeStyle = 'darkgreen'
    c.stroke()
});
