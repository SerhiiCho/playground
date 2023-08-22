# Control player in JavaScript canvas

## Notes

- `ctx.save` and `ctx.restore` methods are used to save and restore the state of
the canvas context. It's used in update function to wrap the code that needs to
be animated once.