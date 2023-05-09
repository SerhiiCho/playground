# Learning Canvas and improving OOP skills

## Canvas context

- `strokeStyle` - changes the color of the stroke;
- `strokeWidth` - changes the width of the stroke;

## Tips

- We don't wont to use global variables inside classes;
- JavaScript has private properties and methods. We can use them with `#property`
and `#method` syntax;
- Encapsulating is the process of hiding the internal details of an object from the
rest of the application. It is a way of protecting the data stored in an object
from being modified by accident.
- `bind()` method in JavaScript is a special method that tells a function to remember
the object it is attached to. It solves the problem of losing the context of `this`
when passing a method as a callback function.
- When you animate something on canvas, you draw it, delete it, update its position and
draw it again. It creates an illusion of motion.
- It's important to clear the canvas before drawing a new frame. Otherwise, the previous
frame will be visible. You do it by calling `clearRect(0, 0, width, height)` method in the beginning of the
function that draws a frame. `0, 0` is the top left corner of the canvas, `width` and `height` are the width and height of the entire canvas.
- `cancelAnimationFrame()` function is used to stop the animation. It takes the ID of the animation frame as an argument.
- `Math.sin()` returns a value between -1 and 1. Use it for wave-like motion. If you pass ever increasing value to it, it will return
a value that oscillates between -1 and 1. Like going up and down. It starts at 0 and goes up to 1, then down to -1, then up to 1 again.
- `Math.cos()` does the same thing as `Math.sin()`, but it starts at 1 and goes down to -1. Multiply this value by the radius of the circle, for example 100, and you will get a circle.