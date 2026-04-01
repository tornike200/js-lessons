// Print results to the console
// We use this to see and check the results
// Open the console in the browser: press F12 -> go to Console tab

console.log("Hello, JavaScript");

// Print results in html
// document.write("Hello, JavaScript ");

// Example: Use alert
// alert() shows a message to the user
// alert("This is Lesson 1");

// Example: Use confirm
// confirm() asks the user yes or no
// confirm("Do you want to delete this account?");

// Example: Use prompt
// prompt() asks the user for information
// prompt("how old are you?");

// Create a variable with let
let firstName = "Tevdore";
console.log(firstName);

// let age = prompt("How old are you?");
// console.log(age);

// Create a variable with var
var lastName = "Khintibidze";

// Create a variable with const
const email = "tkhintibidze@itvet.ge";

// Change a variable value
lastName = "Gamsakhurdia";
console.log(lastName);

// We cannot change a const variable
// email = "test@gmail.com";

// Variable types (data types)

// string type
let city = "Tbilisi";
console.log(typeof city);

// number type
let year = 2026;
console.log(typeof year);

// boolean type
let isStudent = true;
console.log(typeof isStudent);

// Math operators
console.log(12 + 8);
console.log(2026 - 1995);
console.log(7 * 8);
console.log(40 / 4);
// Modulo (%) returns the remainder
console.log(13 % 2);

// Power
console.log(2 ** 3);

// String concatenation (join strings)

let userName = "მარიამი";
console.log("მე ვარ" + " " + userName);

// Exercise 1
// Use prompt() to ask the user their name
// and print a greeting in the console
// Example: "Hello John"

// let userName1 = prompt("what is your name");
// console.log("Hello " + userName1);
// // print in html
// document.write("Hello " + userName1);

// prompt() gives us text (string type)
let userAge = prompt("How old are you");
console.log(typeof userAge);

// Change string to number
// Example 1
console.log(typeof +userAge);

// Example 2
console.log(typeof Number(userAge));

// Exercise 2
// Create a variable carName, give it a string value
// and print it in the console

// Exercise 3
// Create a variable carModel, give it a string value
// and print it with alert()

// Exercise 4
// Use prompt() to ask for a car year
// Tell how old the car is
// Example: "Your car is X years old"

// Exercise 5
// We have two variables: num1 = 5, num2 = 3
// Swap their values using only math operators
// After swap: num1 = 3, num2 = 5
// Do not create a new variable like num3
// Do not use direct assignment like num2 = 300
// Do not rename variables

let num1 = 5;
let num2 = 3;

console.log("num1: " + num1);
console.log("num2: " + num2);

//8       5     3
num1 = num1 + num2;

//5      8       3
num2 = num1 - num2;

//3      8       5
num1 = num1 - num2;

console.log("num1: " + num1);
console.log("num2: " + num2);
