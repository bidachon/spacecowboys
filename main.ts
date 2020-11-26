enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Walking_left,
    walking_right
}
namespace SpriteKind {
    export const tree = SpriteKind.create();
    export const player = SpriteKind.create();
}

/*sprites.onOverlap(SpriteKind.Player, SpriteKind.tree, function (sprite, otherSprite) {
    cowboy.setVelocity(cowboy.vx * -1, cowboy.vy * -1)
})*/

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, cowboy, 100, 0)
    projectile.setFlag(SpriteFlag.DestroyOnWall, true)
})
function maketrees () {
    let alltrees: Sprite[] = []
    for (let index = 0; index < 10; index++) {
        tree1 = sprites.create(img`
            . . . . . . d 7 d . . . . . . . 
            . . . . . d 7 7 7 d . . . . . . 
            . . . . d d 7 7 7 d d . . . . . 
            . . . . d 7 7 7 7 7 d . . . . . 
            . . . d d 7 7 7 7 7 d d . . . . 
            . . . d 7 7 7 7 7 7 7 d . . . . 
            . . d d 7 7 7 7 7 7 7 d d . . . 
            . . d 7 7 7 7 7 7 7 7 7 d . . . 
            . d d 7 7 7 7 7 7 7 7 7 d d . . 
            . d 7 7 7 7 7 7 7 7 7 7 7 d . . 
            . d d d d d e e e d d d d d . . 
            . . . . . d e e e d . . . . . . 
            . . . . . d e e e d . . . . . . 
            . . . . . d e e e d . . . . . . 
            . . . . . d e e e d . . . . . . 
            . . . . . d d d d d . . . . . . 
            `, SpriteKind.tree)
        alltrees.push(tree1)
    }
    for (let value of alltrees) {
        value.setPosition(randint(10, scene.screenWidth()), randint(10, scene.screenHeight()))
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.tree, function (sprite, otherSprite) {
    projectile.setVelocity(projectile.vx * (randint(-50, 50) * -1), projectile.vy * (randint(-50, 50) * -1))
})
let tree1: Sprite = null
let projectile: Sprite = null
let cowboy: Sprite = null
scene.setBackgroundColor(13)
maketrees()

cowboy = sprites.create(img`
    . . . . e e e . . . . . . . . . 
    . . . . e e e . . . . . . . . . 
    . . e e e e e e e . . . . . . . 
    . . . . 4 3 4 . . . . . . . . . 
    . . . . 3 3 3 . . . . . . . . . 
    . . . . 3 4 4 . . . . . . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . 6 6 6 6 6 6 6 . . . . . . . 
    . . 3 3 6 6 6 6 6 3 . . . . . . 
    . . . 3 6 6 6 6 . 3 3 . f f f . 
    . . . 3 3 6 6 6 . . 3 3 f . . . 
    . . . 6 3 3 6 6 . . . . . . . . 
    . . . c . . . c . . . . . . . . 
    . . . c . . . c . . . . . . . . 
    . . . c c . . c c . . . . . . . 
    . . . c c c . . c c . . . . . . 
    `, SpriteKind.Player)
cowboy.setFlag(SpriteFlag.BounceOnWall, true)
controller.moveSprite(cowboy, 100, 100)
let walkright = animation.createAnimation(ActionKind.walking_right, 100)
animation.attachAnimation(cowboy, walkright)
walkright.addAnimationFrame(img`
    . . . . e e e . . . . . . . . . 
    . . . . e e e . . . . . . . . . 
    . . e e e e e e e . . . . . . . 
    . . . . 4 3 4 . . . . . . . . . 
    . . . . 3 3 3 . . . . . . . . . 
    . . . . 3 4 4 . . . . . . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . 6 6 6 6 6 6 6 . . . . . . . 
    . . 3 3 6 6 6 6 6 3 . . . . . . 
    . . . 3 6 6 6 6 . 3 3 . f f f . 
    . . . 3 3 6 6 6 . . 3 3 f . . . 
    . . . 6 3 3 6 6 . . . . . . . . 
    . . . c . . . c . . . . . . . . 
    . . . c . . . c c . . . . . . . 
    . . . c c . . . c c . . . . . . 
    . . . c c c . . . . . . . . . . 
    `)
walkright.addAnimationFrame(img`
    . . . . e e e . . . . . . . . . 
    . . . . e e e . . . . . . . . . 
    . . e e e e e e e . . . . . . . 
    . . . . 4 3 4 . . . . . . . . . 
    . . . . 3 3 3 . . . . . . . . . 
    . . . . 3 4 3 . . . . . . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . 6 6 6 6 6 6 6 . . . . . . . 
    . . 3 3 6 6 6 6 6 3 . . . . . . 
    . . . 3 6 6 6 6 . 3 3 . f f f . 
    . . . 3 3 6 6 6 . . 3 3 f . . . 
    . . . 6 3 3 6 6 . . . . . . . . 
    . . . c . . . c . . . . . . . . 
    . . . . c . c c . . . . . . . . 
    . . . . c c c . . . . . . . . . 
    . . . . . c c . . . . . . . . . 
    `)
walkright.addAnimationFrame(img`
    . . . . e e e . . . . . . . . . 
    . . . . e e e . . . . . . . . . 
    . . e e e e e e e . . . . . . . 
    . . . . 4 3 4 . . . . . . . . . 
    . . . . 3 3 3 . . . . . . . . . 
    . . . . 3 4 4 . . . . . . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . 6 6 6 6 6 6 6 . . . . . . . 
    . . 3 3 6 6 6 6 6 3 . . . . . . 
    . . . 3 6 6 6 6 . 3 3 . f f f . 
    . . . 3 3 6 6 6 . . 3 3 f . . . 
    . . . 6 3 3 6 6 . . . . . . . . 
    . . c c . . c c . . . . . . . . 
    . c c . . c c . . . . . . . . . 
    . c . . c c . . . . . . . . . . 
    . c c . c c c . . . . . . . . . 
    `)
walkright.addAnimationFrame(img`
    . . . . e e e . . . . . . . . . 
    . . . . e e e . . . . . . . . . 
    . . e e e e e e e . . . . . . . 
    . . . . 4 3 4 . . . . . . . . . 
    . . . . 3 3 3 . . . . . . . . . 
    . . . . 3 4 4 . . . . . . . . . 
    . . . . . 3 . . . . . . . . . . 
    . . 6 6 6 6 6 6 6 . . . . . . . 
    . . 3 3 6 6 6 6 6 3 . . . . . . 
    . . . 3 6 6 6 6 . 3 3 . f f f . 
    . . . 3 3 6 6 6 . . 3 3 f . . . 
    . . . 6 3 3 6 6 . . . . . . . . 
    . . . c . . . c . . . . . . . . 
    . . . c . . . c . . . . . . . . 
    . . . c c . . c c . . . . . . . 
    . . . c c c . . c c . . . . . . 
    `)
let walkleft = animation.createAnimation(ActionKind.Walking_left, 100)
animation.attachAnimation(cowboy, walkleft)
walkleft.addAnimationFrame(img`
    . . . . . . . . . e e e . . . . 
    . . . . . . . . . e e e . . . . 
    . . . . . . . e e e e e e e . . 
    . . . . . . . . . 4 3 4 . . . . 
    . . . . . . . . . 3 3 3 . . . . 
    . . . . . . . . . 4 4 3 . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . . . . . 6 6 6 6 6 6 6 . . 
    . . . . . . . 3 6 6 6 6 3 3 . . 
    . . . . . . 3 3 6 6 6 3 3 . . . 
    . . f f f 3 3 . 6 6 3 3 6 . . . 
    . . . . f 3 . . 6 6 6 6 6 . . . 
    . . . . . . . . c . . . c . . . 
    . . . . . . . . 4 c . c c . . . 
    . . . . . . . . . c c c . . . . 
    . . . . . . . . . . c c . . . . 
    `)
walkleft.addAnimationFrame(img`
    . . . . . . . . . e e e . . . . 
    . . . . . . . . . e e e . . . . 
    . . . . . . . e e e e e e e . . 
    . . . . . . . . . 4 3 4 . . . . 
    . . . . . . 3 . . 3 3 3 . . . . 
    . . . . . . . . . 4 4 3 . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . . . . . 6 6 6 6 6 6 6 . . 
    . . . . . . . 3 6 6 6 6 3 3 . . 
    . . . . . . 3 3 6 6 6 3 3 . . . 
    . . f f f 3 3 . 6 6 3 3 6 . . . 
    . . . . f 3 . . 6 6 6 6 6 . . . 
    . . . . . . . . c . . . c . . . 
    . . . . . . . c c . . c . . . . 
    . . . . . . . c . . c . . . . . 
    . . . . . . c c . . c c . . . . 
    `)
walkleft.addAnimationFrame(img`
    . . . . . . . . . e e e . . . . 
    . . . . . . . . . e e e . . . . 
    . . . . . . 3 e e e e e e e . . 
    . . . . . . . . . 4 3 4 . . . . 
    . . . . . . . . . 3 3 3 . . . . 
    . . . . . . . . . 4 4 3 . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . . . . . 6 6 6 6 6 6 6 . . 
    . . . . . . . 3 6 6 6 6 3 3 . . 
    . . . . . . 3 3 6 6 6 3 3 . . . 
    . . f f f 3 3 . 6 6 3 3 6 . . . 
    . . . . f 3 . . 6 6 6 6 6 . . . 
    . . . . . . . . c . . . c . . . 
    . . . . . . . . . c . . c . . . 
    . . . . . . . . . c . . . c . . 
    . . . . . . . . c c . . c c c . 
    `)
walkleft.addAnimationFrame(img`
    . . . . . . . . . e e e . . . . 
    . . . . . . . . . e e e . . . . 
    . . . . . . . e e e e e e e . . 
    . . . . . . . . . 4 3 4 . . . . 
    . . . . . . . . . 3 3 3 . . . . 
    . . . . . . . . . 4 4 3 . . . . 
    . . . . . . . . . . 3 . . . . . 
    . . . . . . . 6 6 6 6 6 6 6 . . 
    . . . . . . . 3 6 6 6 6 3 3 . . 
    . . . . . . 3 3 6 6 6 3 3 . . . 
    . . f f f 3 3 . 6 6 3 3 6 . . . 
    . . . . f 3 . . 6 6 6 6 6 . . . 
    . . . . . . . . c . . . c . . . 
    . . . . . . . . c . . c c . . . 
    . . . . . . . c c . c c . . . . 
    . . . . . . c c . c c . . . . . 
    `)
game.onUpdate(function () {
    if (cowboy.vx == 0) {
        animation.setAction(cowboy, ActionKind.Idle)
    } else if (cowboy.vx > 0) {
        animation.setAction(cowboy, ActionKind.walking_right)
    } else {
        animation.setAction(cowboy, ActionKind.Walking_left)
    }
})
