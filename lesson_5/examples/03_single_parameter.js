// Example 3 - Single Parameter (No Parentheses Needed)
// When there is only ONE parameter, you can remove the ()

// With parentheses (always valid)
const square_paren = (x) => x * x;

// Without parentheses (valid only with single param)
const square = (x) => x * x;

console.log(square(4)); // 16
console.log(square(9)); // 81

// More examples with single parameter
const double = (n) => n * 2;
console.log(double(7)); // 14

const shout = (str) => str.toUpperCase() + "!!!";
console.log(shout("hello")); // HELLO!!!

const isNegative = (n) => n < 0;
console.log(isNegative(-5)); // true
console.log(isNegative(3)); // false

// NOTE: With ZERO or TWO+ parameters, () is required
const add = (a, b) => a + b; // two params → need ()
const sayHi = () => "Hi!"; // zero params → need ()
console.log(add(3, 5)); // 8
console.log(sayHi()); // Hi!
