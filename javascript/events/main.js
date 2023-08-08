// EVENTS: Are those actions that a user can perform on the webpage; Those actions give rise to a reaction in the web page.

// WAYS TO ATTACH LISTENERS TO EVENTS
// -> addEventListener()
// -> on[event]
// -> <p on[event]=""> </p>

// function ChangeBodyColor()
// {
//     let taker = document.getElementById("taker").value;
//     document.getElementById("Xtaker").innerHTML = taker;
//     // document.body.style.backgroundColor = "yellow"
// }

// // Home Work 

// function updateText() {
//   var inputText = document.getElementById("inputText").value;
//   document.getElementById("outputText").innerHTML = inputText;
// }


// Using The addEventListener(type, function) Method
const btn = document.querySelector("button")
// btn.addEventListener("click", sayHello)
// btn.addEventListener("click", sayHello, {once:true})
// btn.removeEventListener("click", sayHello)

const input = document.querySelector("input")
console.log(input)
input.addEventListener("keydown", (e) =>{
  console.log(e)
})
