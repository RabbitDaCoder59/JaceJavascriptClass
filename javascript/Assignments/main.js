// Assignment
// 1. convert the the following to arrays
// stud_001 to stud_oo6
// names - Nwankwo charlse Mary jane Colins Edeh christmary john ntike boy martins edeh
// Marks - 89 70 50 69 29 55

// 2. get all students that scores 50 above in their mark
/// get all student that that have c in their name
// get student with id stud_001
// get all student with c in their name and have mark of 60
// add new student in the array
// johnbosco henry
// stud_007 +
// mark 73
// remove student index 3
// get the sum of the marks

//  Question 1
const __obj = {
  ID: "stud_001, stud_002, stud_003, stud_004, stud_005, stud_006",
  NAME: "Nwankwo Charlse,  Mary jane, Colins Edeh, Christmary john, ntike boy, martins edeh ",
  MARK: "89 ,70, 50 ,69 , 29,  55",
};

console.table(__obj);

// Arrays

const studentArray = [
  { id: "stud_001", name: "Nwankwo Charlse", mark: 89 },
  { id: "stud_002", name: "Mary jane", mark: 70 },
  { id: "stud_003", name: "Colins Edeh", mark: 50 },
  { id: "stud_004", name: "Christmary john", mark: 69 },
  { id: "stud_005", name: "ntike boy", mark: 29 },
  { id: "stud_006", name: "martins edeh", mark: 55 },
];

// Question 2
// const newMark = studentArray.forEach(function (student){
//     console.log(student)
// } );

// Question 2a
// const studentMarkAbove50 = studentArray.filter(function (student){
//     return student.mark >= 50
// });
// console.log(studentMarkAbove50);

// // Question 2b

const studentWithCInTheirName = studentArray.filter(function (student) {
  return student.name.toLowerCase().includes("c");
});
console.log("studentWithCInTheirName", studentWithCInTheirName);

// Question 2c
const studentWithId = studentArray.find(function (student) {
  return student.id === "stud_001";
});
console.log("studentWithId", studentWithId);

const studentWithCAndMark = studentArray.filter(function (student) {
  return student.name.toLowerCase().includes("c") && student.mark > 60;
});
console.log("studentWithCAndMark", studentWithCAndMark);

const newStudent = {
  id: "stud_007",
  name: "johnbosco henry",
  mark: 73,
};
studentArray.push(newStudent);
// console.log(studentArray)

// studentArray.splice(studentArray.length, 0, newStudent);
// console.log(studentArray)

studentArray.splice(3, 1);
console.log("studentArray", studentArray);

let sum = studentArray.reduce(function (sum, student) {
  return sum + student.mark;
}, 0);
console.log("sum", sum);

let totalSum = 0;
studentArray.forEach(function (student) {
  totalSum += student.mark;
});
console.log(totalSum);
// let newArr = [];
// name.map((v,i,arr)=>{
//     if (v.includes("C")) {
//         newArr.push(v);
//     }
// });
// console.log(newArr);

// // Question 2B
// let IdArr = [];
// ID.map((v,i,arr)=>{
//     if (v.includes("stud_001")) {
//         IdArr.push(v);
//     };
// });
// console.log("These is the student with",IdArr);

// // Question 2C
// const obj = {"Nwankwo Charlse":89,  "Mary jane":70, "Colins Edeh":50, "Christmary john":69, "ntike boy":29, "martins edeh":55};
// let IdNameArr = [];
// for (const key in obj) {
//     if (key.includes("C")) {
//         const Cname = obj[key];
//         if (Cname > 60) {

//             IdNameArr.push(`Name: ${key} || Mark: ${Cname}`);

//         };
//     };

// };
// console.log(IdNameArr);

// // Question 2D

//  name[6] = "johnbosco henry";
//  mark[6] =  73;
//  ID[6] = "stud_007";
//  console.log(mark,name,ID);

//  // Question 2E

//  // Remove name
//  let removeStudentName = name.splice(3,1);
//  console.log("These is the name removed in Index 3",removeStudentName);
//  console.log("These is the remaining names:", name);

//  // Remove Id

//  let removeStudentId = ID.splice(3,1);
//  console.log("These is the name removed in Index 3",removeStudentId);
//  console.log("These is the remaining names:", ID);

//  // Remove Mark

//  let removeStudentMark = mark.splice(3,1);
//  console.log("These is the name removed in Index 3",removeStudentMark);
//  console.log("These is the remaining names:", mark);
