// Print text to the console
console.log("Hello, JavaScript");

// alert / confirm / prompt examples
// alert("I am Robot"); // shows a message
// confirm("Are you Student?"); // returns true or false
// prompt("How old are you?"); // get information from user

// Variables

// let - value can change
let firstName = "Tamar";
console.log(firstName);

// Change value
firstName = "Giorgi";
console.log(firstName);

// Number variable
let age = 32;
console.log(age);

// var - old type (we don't use it)
var lastName = "Grigolia";

// const - constant variable (cannot change)
const id = "60001128233";
// id = "33345656"; // error

// Data Types
let year = 2026;
console.log(typeof year); // number

let studentName = "Tevdore";
console.log(typeof studentName); // string

let isStudent = true;
console.log(typeof isStudent); // boolean
console.log(isStudent);

// Math operations
console.log(12 + 3); // addition
console.log(321 - 1); // subtraction
console.log(7 * 8); // multiplication
console.log(30 / 5); // division
console.log(11 % 2); // remainder
console.log(2 ** 3); // power

// String concatenation (join strings)
let userName = "name";
let userSurname = "surname";

// add space correctly
let fullName = userName + " " + userSurname;
console.log(fullName);

// prompt() - get information from user
let sName = prompt("Write your name:");
console.log(sName);

// Get age
let sAge = prompt("Write your age");

// Change string to number
let numberAge = Number(sAge);
console.log(numberAge);

// Get two numbers and add them
let num1 = prompt("Enter first number:");
let num2 = prompt("Enter second number:");

// prompt returns string, so we use Number()
let sum = Number(num1) + Number(num2);

console.log("Sum is: " + sum);
