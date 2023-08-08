let arr = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

function generateColor() {
    let colors ="#"
    for (let i = 1; i <= 6 ; i++) {
      let RandomIndex = Math.floor(Math.random() * arr.length)
        colors += arr[RandomIndex]

        

        
    }
    return colors
}

let id;

document.getElementById("button").onclick = () => {
     id =   setInterval(() => {
  document.body.style.background = generateColor()
}, 2000)
}

document.getElementById("button1").onclick = () => {
  clearInterval(id)
}


