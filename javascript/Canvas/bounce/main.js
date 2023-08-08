const canvas = document.querySelector("canvas")
const ctx = canvas.getContext('2d')

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
window.addEventListener("resize", () => {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight

init()
})

class Ball {

constructor(){
    this.radius = 50
    this.x = Math.floor(Math.random() * (canvas.width - this.radius * 2)) + this.radius
    this.y = Math.floor(Math.random() * (canvas.height - this.radius * 2)) + this.radius
    this.speedX = 4
    this.speedY = 4
}
    Draw() {
    ctx.beginPath()
    ctx.arc(this.x,this.y,this.radius,0,Math.PI * 2);
    ctx.stroke()
    }

    Update() {

    if((this.x + this.radius) > canvas.width || (this.x - this.radius) < 0 ){
        this.speedX = -this.speedX
    }
   

    if((this.y + this.radius) > canvas.height || (this.y - this.radius) < 0 ){
        this.speedY = -this.speedY
    }

    this.y+= this.speedY 
    this.x+= this.speedX

     this.Draw()
    }
  
}

// create the ball
const ball = new Ball()

let BounceBall = []

init()

function init(){
    for (let i = 0; i < 30; i++) {
        BounceBall.push(new Ball())  
    }

    animnate();
}
function animnate(){
    ctx.clearRect(0,0,canvas.width,canvas.height)
    for (let index = 0; index < BounceBall.length; index++) {
        const ball = BounceBall[index];
        ball.Update()
    }
    requestAnimationFrame(animnate) // ctx.beginPath()
}
