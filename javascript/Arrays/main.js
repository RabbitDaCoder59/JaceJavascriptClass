// ARRAYS; Are objects that can store multiple values of different data types.

// Arrys can be created in two ways:
// - Array Object - Class
// - Arrays Literal - []

// ** Array Object
const myPets = new Array("Cat", "Dog", "Rabbit");
console.log(myPets);

// ** Arrays Literals
const colors = ["Red", "Blue", "Green"]; //** prefered */
console.log(colors);

// INDEX: Indexes are used to represent the position of an element in the arrays. It starts from 0 - (n-1); n = number of items in the arrays

// using Index to get an element from the array
let element = colors[0];
console.log(element);

// Use index to modify the element in the array
colors[1] = "yellow";
console.log(colors); // [Red,yellow,Green]

// Using index to add an element in the array
colors[3] = "purple";
console.log(colors); // [Red,yellow,Green,purple]

// ARRAY METHOD

// - length: Returns the number of elements in the arrays
console.log(colors.length); // 4

// - foreach (element, index, array): It iterates through the elements in the arrays
colors.forEach((item, index, ar) => {
  console.log("Items -", item, "Index -", index, "Arrays -", ar);
});

// - map (): It ilterates through the elements in the array, and returns a new array based off what was returned in the callback function
const newItems = colors.map((item) => {
  return item + "Something else";
});

console.log("New Items", newItems);

const scores = [30, 44, 60, 70, 79];
// Add 5 marks to the students score
const newScores = scores.map((item) => item + 5);
console.log("New Scores:", newScores);

// - filter (): It iterates through the element in the arrray, The returns those element that passes the condition returned from the callback function.

const students = ["bob", "mary", "ray", "matt", "john", "david"];
console.log(" students", students.includes("ray"));
// const newStudent = students.filter((item) => {
//     return item.length >= 4
// })
const newStudent = students.filter((item) => item.length >= 4);
console.log(newStudent);

// - splice ():
// a. Splice can be used to remove and element from the array.
const foods = ["Rice", "Beans", "Plaintain", "Corn"];
let removeItem = foods.splice(0, 1);
console.log("Remaining food", "this is it", foods);
console.log("Removed food", removeItem);
// b. Splice can be used to replace and element with a new value in the array.
removeItem = foods.splice(0, 1, "paw-paw");
console.log("Remaining food", foods);
console.log("Replaced food", removeItem);
// c. Splice can be used to add a new element to any postion in the array.
removeItem = foods.splice(0, 1, "paw-paw");
console.log("Remaining food", "these is it", foods);
console.log("Added food", removeItem);

// - includes (item: any) -> Returns a boolean value. If the arrat contains the item it returns true otherwise it returns false
const studentArr = [
  { name: "mary", class: "tertiary" },
  { name: "John", class: "secondary" },
];
const item = {
  name: "John",
  class: "secondary",
};
console.log("Item", studentArr.includes("item"));

// - find () -> Returns the the element that passes the search otherwise it returns "undefined"
const class1 = studentArr.find((i) => i.class === "secondary");

// - findIndex () -> Returns the index position of the element that passes the search otherwise it returns -1
const class1Index = studentArr.findIndex((i) => i.class === "secondary");
console.log(class1Index);

// - indexOf (search: any) -> Returns the index position [i.e index] of the element that passes the search otherwise it returns -1
const indexOfStudent = studentArr.indexOf(item);
console.log("indexOfStudent =>", indexOfStudent);

// - slice (startIndex, lenght[endIndex]) -> It returns some part of the array based on the args passed
const newArr = [
  "sunday",
  "monday",
  "tuesday",
  "friday",
  "thursday",
  "wednesday",
  "saturday",
];
const sliced = newArr.slice(2, 4);
console.log("Sliced =>", sliced);

// - join (seperator)
const joined = newArr.join(",");
console.log("joined =>", joined);

// Classwork 1
// Number 1
function getMax(arr) {
  MyMax = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > MyMax) {
      MyMax = arr[i];
    }
  }
  return MyMax;
}
const numbers = [1, 12, 100, 250, 150, 400, 5];
console.log("max number", getMax(numbers));

// Number 1
function removeDup(arr) {
  const oddNumber = [];

  for (let i = 0; i < arr.length; i++) {}
}
// DESTRUCTURING in Arrays

// const [190] = numbers
// Spread operator in Arrays
const addNumber = [...numbers, 9, 6, 90];

// Todo App Project
