# Lesson 5 - Exercises: Arrow Functions

Practice exercises with worked examples to study before doing the tasks.

---

## Exercise 1 — Convert a Standard Function to Arrow Function

**Standard function:**

```js
function sayHello() {
  console.log("Hello!");
}
sayHello(); // Hello!
```

**Arrow function:**

```js
const sayHello = () => {
  console.log("Hello!");
};
sayHello(); // Hello!
```

---

## Exercise 2 — Arrow Function with Two Parameters

```js
const add = (a, b) => {
  return a + b;
};

console.log(add(5, 10)); // 15
console.log(add(3, 7)); // 10
```

---

## Exercise 3 — Implicit Return

When the body is a single expression, skip `{}` and `return`:

```js
const multiply = (a, b) => a * b;

console.log(multiply(4, 5)); // 20
console.log(multiply(3, 8)); // 24
```

---

## Exercise 4 — Single Parameter (No Parentheses)

```js
const square = (x) => x * x;

console.log(square(4)); // 16
console.log(square(7)); // 49
```

---

## Exercise 5 — Arrow Function with if/else

```js
const isEven = (n) => {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
};

console.log(isEven(4)); // even
console.log(isEven(7)); // odd
```

---

## Exercise 6 — Arrow Function as a Callback

```js
const numbers = [10, 20, 30, 40, 50];

numbers.forEach((n) => console.log(n));
// prints 10, 20, 30, 40, 50
```

---

## Exercise 7 — Comparing All Three Styles

All three lines below do the same thing:

```js
// Standard function
function divide(a, b) {
  return a / b;
}

// Function expression
const divide = function (a, b) {
  return a / b;
};

// Arrow function with implicit return
const divide = (a, b) => a / b;

console.log(divide(20, 4)); // 5
```

---

## Exercise 8 — Arrow Function with Template Literal

```js
const greetUser = (name, age) => `Hello ${name}, you are ${age} years old.`;

console.log(greetUser("Luka", 22));
// Hello Luka, you are 22 years old.
```

---

## Exercise 9 — Arrow Function Returning an Object

Wrap the object in `()` when using implicit return:

```js
const makePerson = (name, age) => ({ name: name, age: age });

console.log(makePerson("Ana", 25));
// { name: 'Ana', age: 25 }
```

---

## Exercise 10 — Saving Results from Arrow Functions

```js
const calcArea = (width, height) => width * height;

const area = calcArea(6, 4);
console.log("Area is: " + area); // Area is: 24
```
