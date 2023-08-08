// LOOPS: The are controls that helps with the repeatition of codes [tasks] based on certain conditions.

// MAIN LOOPS IN JS :
// FOR
// WHILE 
// DO WHILE


// EXTRAS
// FOR OF
// FOR IN


// FOR LOOPS
// SYNTAX
// for (initialization; condition; increment/decrement) {
  // block of codes
//}

// Initialization: This is where you initialize your counter variable
// Condition: where you specify the condition for the counter, This is what terminates the loop
// Increment / Decrement: Based on your logic, you can choose to increment or decrement the counter variable.

// program 1. Counter Program: - it will count from 1 to 10
// document.write(`<p>Numbers 1 - 10</p>`)
// for (let counter = 1; counter <=10; counter++) {
//     document.write(`<p>${counter}</p>`)
// }

// program 2. Counter Program: - it will count even numbers
// document.write(`<p>Even Numbers</p>`)
// for (let counter = 1; counter <=10; counter++) {
//     if (counter%2===0)document.write(`<p>${counter}</p>`)
// }

// program 1. Counter Program: - it will count from 1 to 10
// document.write(`<p>Odd Numbers</p>`)
// for (let counter = 1; counter <=10; counter++) {
//     if (counter%2==0) continue;
//     document.write(`<p>${counter}</p>`)
// }

// WHILE LOOP
// SYNTAX
// while (condition) {
    // block of codes
//}

// let i = 1;

// while (1<=10) {
//     document.write(`<p>${i}`)
//     i +=1;
// }

// console.log(`<p>Final Loop:${i}`)


// DO WHILE LOOP
// do {
//   console.log("i will print")
// } while (false);

// FOR OF => For Srings and Arrays

const firstName = "edeh chinedu"
for(let letter of firstName)
{
console.log(letter)
}
console.log(string)
// FOR IN => For Objects
const person = {
  name: "John Smith",
  age: 32
}

for (let item in person)
{
  console.log(person[item])
}

// CLASS WORK
// Reversing a string


const string = "hello"
 const reverseString = (text) =>{
  result = ""
  for(let letter of string){
  result = letter + result
}
return result
 }
console.log(reverseString(string))
