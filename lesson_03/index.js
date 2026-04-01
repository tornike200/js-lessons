// Arithmetic operators
// +
// -
// *
// /
// %
// **

// Comparison operators

// >
// <
// Compares only values
// ==
// Compares both values and types
// ===
// >=
// <=
// !=
// !==

let num1 = 5;
let num2 = "5";

console.log(num1 == num2);
console.log(num1 === num2);

// if Conditional

if (num1 == num2) {
  console.log("hello js");
}

let fName = "ni";

if (fName == "tevdore") {
  console.log("I am tevdore");
} else if (fName == "nikoloz") {
  console.log("I am nikoloz");
} else if (fName == "George") {
  console.log("I am George");
} else {
  console.log("I am robot");
}

let age1 = 12;
let age2 = 20;
// Check two variables, if one is bigger
// print in console " age1 is bigger" or "age2 is bigger"
// if they are equal "variables are equal"

if (age1 > age2) {
  console.log("age1 is bigger");
} else if (age2 > age1) {
  console.log("age2 is bigger");
} else {
  console.log("variables are equal");
}

// Age check for party entry
let customerAge = 20;

if (customerAge >= 18) {
  console.log("You can enter");
} else {
  console.log("Sorry, you cannot enter");
}

// If user age < 18: no cigarettes and no alcohol
// If age >= 18 and < 22: yes cigarettes, no alcohol
// If age >= 22: yes cigarettes and yes alcohol

if (customerAge < 18) {
  console.log("Sorry, you cannot have alcohol or cigarettes");
} else if (customerAge > 22) {
  console.log("You can have alcohol and cigarettes");
} else {
  console.log("You can have cigarettes but not alcohol");
}

// Logical operators

// && (and)
// || (or)
// ! (not)

let num = 12;

console.log(num > 10 && num < 20);
console.log(num > 10 || num > 20);

let day = "monday";
let weather = "rain";

if (day == "monday" && weather == "rain") {
  console.log("I don't want to go to work today");
} else if (day == "monday" && weather != "rain") {
  console.log("I will go to work");
}
