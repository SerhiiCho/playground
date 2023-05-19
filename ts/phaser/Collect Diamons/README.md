# Collect Diamonds game

## Notes

- `init() -> preload() -> create() -> update()` is the order of execution of the functions in the game loop. All the functions are executed only once except `update()` which is executed in a loop for each frame.
- You can flip the sprite with `flipX` and `flipY` properties on the Sprite object. For example, `sprite.flipX = true` will flip the sprite horizontally.
- You can rotate sprites by calling the `setAngle()` method on the Sprite object. For example, `sprite.setAngle(90)` will rotate the sprite by 90 degrees. It rotates based on the origin position of the sprite. By default, it's in the center of the sprite.