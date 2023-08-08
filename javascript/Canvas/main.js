const canvas = document.querySelector("canvas");
const ctx = canvas.getContext('2d');

// Give the canvas a width and height
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

console.log(ctx)
// Basic Shapes

// Rectangle
// rect(x,y, width, height)

ctx.rect(400,120,300,100)

// fill gives the shape a bg

ctx.fillStyle = "orange";
ctx.fill()

// stroke gives the shape a border color
ctx.strokeStyle = "red"
ctx.stroke()
// fillRect(x,y, width, height)
ctx.fillStyle = "gray";
ctx.fillRect(200,200,200,90)

// strokeRect
ctx.strokeStyle = "blue";
ctx.strokeRect(500,400,200,90)


// Cleaning the canvas 
ctx.clearRect(0,0, canvas.width, canvas.height)


// Line
ctx.beginPath()
// moveTo(x,y)
// ctx.moveTo(200, 100)
// lineTo(x,y)
// ctx.lineTo(300,100)
// ctx.lineTo(300,200)
// ctx.lineTo(200,200)
// ctx.lineTo(200,100)
ctx.closePath()
// ctx.fill()
// ctx.stroke()

// Circle
//  arc(x,y,radius,startAngle,endAngle, antiClockwise)
// ctx.arc(200,200,50,0,Math.PI * 2)
// ctx.fill()
// ctx.stroke()

let radius = 100
let x = (canvas.width/2)
let y = (canvas.height/2)

ctx.arc(x,y,radius,0,Math.PI * 2)
ctx.fill()
// Animate in Canvas

// Classes

// Project