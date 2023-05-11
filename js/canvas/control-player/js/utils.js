/**
 * @param {Player} player
 * @param {CollisionBlock} block
 * @returns {boolean}
 */
function collision(player, block) {
    const playerSides = {
        bottom: player.position.y + player.height,
        top: player.position.y,
        right: player.position.x + player.width,
        left: player.position.x,
    }

    const collisionSides = {
        top: block.position.y,
        bottom: block.position.y + block.height,
        right: block.position.x + block.width,
        left: block.position.x,
    }

    return (
        playerSides.bottom >= collisionSides.top &&
        playerSides.top <= collisionSides.bottom &&
        playerSides.left <= collisionSides.right &&
        playerSides.right >= collisionSides.left
    )
}