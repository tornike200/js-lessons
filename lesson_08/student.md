# Lesson 8 - Student Notes: Loops in JavaScript

## What is a Loop?

A loop repeats a block of code multiple times — either a fixed number of times or until a condition becomes false.

---

## 1. `for` Loop

The most common loop. Use it when you know how many times to repeat.

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 0, 1, 2, 3, 4
```

**Parts of a `for` loop:**

- `let i = 0` — starting value (runs once)
- `i < 5` — condition checked before each repeat
- `i++` — step (runs after each repeat)

**Looping through an array:**

```js
const fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}
```

---

## 2. `while` Loop

Repeats as long as the condition is `true`. Use when you don't know in advance how many times to loop.

```js
let count = 0;

while (count < 5) {
  console.log(count);
  count++;
}
```

---

## 3. `do...while` Loop

Like `while`, but the code block runs **at least once** before checking the condition.

```js
let n = 0;

do {
  console.log("n is:", n);
  n++;
} while (n < 3);
```

---

## 4. `for...of` Loop

The simplest way to loop over an **array** (or string). You get each value directly.

```js
const colors = ["red", "green", "blue"];

for (let color of colors) {
  console.log(color);
}
```

---

## 5. `for...in` Loop

Loops over the **keys** of an object.

```js
const person = { name: "Ana", age: 22, city: "Tbilisi" };

for (let key in person) {
  console.log(key, ":", person[key]);
}
```

---

## 6. `break` and `continue`

- `break` — stop the loop immediately
- `continue` — skip the current iteration and move to the next

```js
for (let i = 0; i < 10; i++) {
  if (i === 5) break; // stops at 5
  if (i % 2 === 0) continue; // skips even numbers
  console.log(i);
}
```

---

## Loop Comparison

| Loop         | Best used when                           |
| ------------ | ---------------------------------------- |
| `for`        | You know the exact number of repetitions |
| `while`      | You repeat until a condition changes     |
| `do...while` | You need to run the block at least once  |
| `for...of`   | Looping over array values                |
| `for...in`   | Looping over object keys                 |
