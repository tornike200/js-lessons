# Lesson 5 - Student Notes: Arrow Functions

## What is an Arrow Function?

An arrow function is a shorter way to write a function in JavaScript.
It was introduced in **ES6 (2015)** and uses the `=>` symbol (arrow).

---

## 1. Standard Function (Before ES6)

```js
function greet(name) {
  return "Hello, " + name;
}
console.log(greet("Anna")); // Hello, Anna
```

---

## 2. Function Expression

```js
const greet = function (name) {
  return "Hello, " + name;
};
console.log(greet("Anna")); // Hello, Anna
```

---

## 3. Arrow Function (Same Thing, Shorter)

```js
const greet = (name) => {
  return "Hello, " + name;
};
console.log(greet("Anna")); // Hello, Anna
```

---

## 4. Implicit Return

When the function body has **only one expression**, you can remove `{}` and `return`.

```js
const greet = (name) => "Hello, " + name;
console.log(greet("Anna")); // Hello, Anna
```

---

## 5. Single Parameter — Skip the Parentheses

When there is **only one parameter**, you can remove `()`.

```js
const square = (x) => x * x;
console.log(square(5)); // 25
```

---

## 6. No Parameters — Keep Empty Parentheses

```js
const sayHi = () => "Hi!";
console.log(sayHi()); // Hi!
```

---

## 7. Multiple Parameters — Always Use Parentheses

```js
const add = (a, b) => a + b;
console.log(add(3, 7)); // 10
```

---

## 8. Arrow Functions as Callbacks

Arrow functions are very common as callbacks (functions passed to other functions).

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((n) => console.log(n));
// prints each number
```

---

## Summary Table

| Style                  | Example                                        |
| ---------------------- | ---------------------------------------------- |
| Standard function      | `function add(a, b) { return a + b; }`         |
| Function expression    | `const add = function(a, b) { return a + b; }` |
| Arrow function         | `const add = (a, b) => { return a + b; }`      |
| Arrow implicit return  | `const add = (a, b) => a + b`                  |
| Single param, implicit | `const square = x => x * x`                    |

---

## Key Points to Remember

- Arrow functions are **stored in variables** (`const` or `let`).
- They cannot be used before they are defined (unlike standard functions).
- When you have **one expression**, you can use implicit return.
- When you have **one parameter**, you can skip the parentheses.
- Arrow functions are great for **callbacks** and short operations.
