//FUNCTIONS
// Functions are REUSABLE piece of code that are maintained seperately from the main program,
//and they perform a specific task.

// Two Kinds
// --> user defined functions
// --> Inbuilt functions

// Inbuilt Functions: They are those functions that are provided by the system(language).
//EG.
//prompt()
// alert()
// const name = prompt("Enter your name:")
// console.log(name)

// User Defined Function: Allows the developer to create some custom functions.
// Declared 
//ES5
function sayHello(nume,numf){
    a =nume+numf
    console.log("hello world!", a)
    return(a)
}

let resi = sayHello(5,90)
console.log(resi)
// INVOKE | CALL | EXECUTE
sayHello(2,8)

//ES6
const sayHelloalt = (daniel) => {
        console.log("hello world! ES6", daniel);
}

sayHelloalt("why the tunnel")

// FUNCTIONS WITH PARAMETERS
// PARAMETERS: They are external values required by the function to execute a task.

// Required Parameters:
// Required parameter are those parameters that the developer MUST pass in the function, in order to execute the task. The function NEEDS the value from that parameter.

//Optional Parameters:
// They are those parameters that the function may or might not need in order to execute the task.

//EXAMPLES
//ES5
function sayHi(name){
    console.log("hello", name)
}

sayHi("john doe")
sayHi("Edeh Chinedu")


//    SUM OF NUMBERS

function sum(num1, num2){
    Add = num1 + num2
    console.log("the sum is",Add);
    // return e
}
sum(6,5)

//    showing datatype
function type(num){
    console.log("the datatype is",typeof num);
}
type(10)
type("edu")
type(true)

// showing datatype of object
function obj(object) {
var person = {fname:"edeh", lname:"chinedu", age:"nan" }
    console.log("the data type is:", typeof person);
}
obj("person")
//    cal. circumfrence

function circumfrence(pi,radius){
    console.log("the area of circumfrence is",2*pi*radius);
}
circumfrence(3.142,0.5)

/// cal. simple intrest
 const s_I = (P,R,T,PERCENT) => {
     CAL = P*R*T/PERCENT
     console.log("THE S.I IS:", CAL);
 }
 s_I(2000,12,5,100)

//Function with optional parameters [default parameter]

// const intrest = (principal, time, rate = 0.5) => {
//     const result = (principal * time * rate)/ 100
//     console.log("Result:", result);
//     // console.log("principal =>",principal, "time => ", time, "rate =>", rate);
// }

// intrest(2000,3)

//      RETURN STATEMENT IN FUNCTION
const intrest = (principal, time, rate = 0.8) => {
    const result = (principal * time * rate)/ 100
    return [result,principal,time ,rate]
}

const resultOfIntrest = intrest(2000,3)
console.log("result:",resultOfIntrest );

///  returning cal. simple intrest
const s_i = (P,R,T,PERCENT) => {
    CAL =( P*R*T)/PERCENT
    return(CAL)
    // console.log("THE S.I IS:", CAL);
}
const result_ = s_i(2000,12,5,100)
console.log("THE S.I IS:", result_);

//  TIPS IN RETURN
//  -- Return terminates the function.
// -- There could ONLY BE ONE RETURN statement in a function
// -- Return only returns single values

//  ADVANCE FUNCTIONS
// - Recursive function
// - promises and asynchronous function [async / await]
// - setTimeout | setInterval
     