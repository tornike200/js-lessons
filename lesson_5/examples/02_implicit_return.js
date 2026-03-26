// Example 2 - Implicit Return
// When the function body is a single expression,
// you can remove {} and the return keyword

// With explicit return (long form)
const double_long = (n) => {
  return n * 2;
};

// With implicit return (short form) — same result
const double = (n) => n * 2;

console.log(double(5)); // 10
console.log(double(12)); // 24

// Implicit return with string
const greet = (name) => "Hello, " + name + "!";
console.log(greet("Luka")); // Hello, Luka!

// Implicit return with template literal
const greetTemplate = (name) => `Hello, ${name}!`;
console.log(greetTemplate("Ana")); // Hello, Ana!

// Implicit return with math
const calcArea = (w, h) => w * h;
console.log(calcArea(6, 4)); // 24
