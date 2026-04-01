// standard function
function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 10));

let result = multiply(5, 6);
console.log(result);

// function expression
let divide = function (a, b) {
  return a / b;
};

console.log(divide(10, 2));

// arrow function
let add = (a, b) => {
  return a + b;
};
console.log(add(3, 4));

// arrow function with implicit return
let subtract = (a, b) => a - b;

console.log(subtract(50, 25));

// arrow function with single parameter
let square = (x) => x * x;
console.log(square(5));
