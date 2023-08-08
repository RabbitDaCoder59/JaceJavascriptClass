// STRINGS
// strings are sequence of character, symbols and numbers enclosed in a qoute

// the quotes used for strings in JS
// single Qoute ('')
//  double qoute ("")
// back-ticks (``)

let name = "john doe"
name = "jane"
name = "chinedu"


let age = "20"

console.log(name)
console.log(age)

//CONCATENATION
// joining two or more string together using the plus symbol [+]

let fristname = "edeh"
let lastname = "chinedu"
name = fristname + " " + lastname
console.log(name)

// Template Literal
name = `${fristname} ${lastname}`
console.log(name)

 let userName = prompt("Enter your name")
 let userAge = prompt("Enter your age")

// get the paragraph element
 const pElement = document.querySelector('p')
// write in the text to the element
 const text = `${userName} is ${userAge} years`
 pElement.innerHTML = text

 // Indexes in string
 const item = "john";
 console.log(item[3]) // n

 // METHODS IN STRINGS
 // startsWith()  -> Returns true if the string starts with the search string
 // lenght ()  -> Returns the number of characters in the string [includes spaces]
 // includes() ->  Returns true if the search string is contained in the string
 // endsWith()
 // charAt()
 // trim()
 // slice()


 const test = "hello world"
 console.log(test.length) // 11

 // startsWith
 console.log(test.startsWith("hello")) // true

 //includes
 console.log(test.includes("llo")) // true

// endsWith
console.log(test.endsWith("d")) // true

//charAt
console.log(test.charAt(1)) //
const test2 = "     testing"

// trim
console.log(test2.trim()) // "testing"

const sliced = test.slice(0, 5)
console.log(sliced) //hello



  
