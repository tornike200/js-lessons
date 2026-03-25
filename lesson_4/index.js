// Create and use functions

// Simple function - print message
// The function keyword tells the browser we create a function
// The code inside the function does not run until we call the function

// function greeting() {
//   console.log("Hello");
// }

// // Call the function - use function name with ()
// greeting();

// Function with parameters (arguments)
// Parameter - variable that is inside the function
// Argument - value that we give to the function

// function greetPerson(name) {
//   console.log("Hello " + name);
// }

// greetPerson("David");
// greetPerson("Maria");
// greetPerson("Tamar");

// Function that returns a result
// return operation sends the result from the function
// We can save this result in a variable

// function getSum(a, b) {
//   return a + b;
// }

// let result = getSum(10, 20);
// console.log(result);

// Two ready examples using functions

// Simple greeting function
function greeting() {
  console.log("Hello");
}

// greeting();

// Function that returns a result
function sum(num1, num2) {
  return num1 + num2;
}

let result = sum(10, 20);
// console.log(result);

// More examples

// Function that checks if number is even
// function isEven(num) {
//   if (num % 2 === 0) {
//     return "even number";
//   } else {
//     return "odd number";
//   }
// }

// console.log(isEven(10));
// console.log(isEven(15));

// Function that finds bigger number

// function findMax(a, b) {
//   if (a > b) {
//     return a;
//   } else {
//     return b;
//   }
// }

// console.log(findMax(15, 25));
