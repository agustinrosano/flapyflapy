const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const img = new Image()
img.src = './back-flapy.png'


//general settings 

let gamePlaying = false

const gravity = .5,
    speed = 6.2,
    size = [51,36],
    jump = -11.5,
    cTenth = canvas.width / 10

let index = 0,
    bestScore = 0,
    flight,
    flyheigt,
    currentScore,
    pipe,
    pipes

const render = () => {
    //movimiento de pajaro
    index++

    //background first part 
    ctx.drawImage (
        img,
        0,
        0,
        canvas.width,
        canvas.height,
        -((index * (speed / 2)) % canvas.width ) + canvas.width,
        0,
        canvas.width,
        canvas.height
    )

    //background second part 

    ctx.drawImage (
        img,
        0,
        0,
        canvas.width,
        canvas.height,
        -((index * (speed / 2)) % canvas.width ) + canvas.width,
        0,
        canvas.width,
        canvas.height
    )

//6:48   https://www.youtube.com/watch?v=bF-pTsdun40

window.requestAnimationFrame(render)

}    

img.onload = render;