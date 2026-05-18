# Lesson 18 - Student Notes: JavaScript Review

## Title

JavaScript Review: From Basics to Real Usage

## Level

Beginner

## Goal

Refresh all core JavaScript skills and apply them together in practical tasks.

## Why It Matters

JavaScript is not used in isolated parts in real jobs. You use variables, functions, arrays, objects, DOM, and async code together in one feature. This review helps you think like a developer, not just like a learner solving separate examples.

## Mental Model

Think of JavaScript development in 4 layers:

1. Language basics (variables, conditions, loops, functions)
2. Data handling (arrays, objects, array methods)
3. UI interaction (DOM and events)
4. Data flow (async code, APIs, storage)

If one layer is weak, building complete features becomes hard.

## Step-by-Step Review

### 1. Variables and Data Types

Use `let` for values that change, `const` for values that should not be reassigned.

```js
const courseName = "JS Review";
let studentCount = 18;
studentCount += 1;

console.log(courseName, studentCount);
```

Common primitive types:

- string
- number
- boolean
- null
- undefined

### 2. Conditionals and Truthy/Falsy

Conditionals decide program flow.

```js
const score = 74;

if (score >= 90) {
  console.log("Excellent");
} else if (score >= 60) {
  console.log("Pass");
} else {
  console.log("Needs improvement");
}
```

Falsy values in JavaScript:

- `false`
- `0`
- `""`
- `null`
- `undefined`
- `NaN`

### 3. Loops

Use loops to process repeated actions.

```js
const fruits = ["apple", "banana", "kiwi"];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (const fruit of fruits) {
  console.log("for...of:", fruit);
}
```

### 4. Functions

Functions group reusable logic.

```js
function add(a, b) {
  return a + b;
}

const multiply = function (a, b) {
  return a * b;
};

const subtract = (a, b) => a - b;

console.log(add(2, 3), multiply(2, 3), subtract(9, 4));
```

### 5. Arrays and Array Methods

Array methods are used heavily in production code.

```js
const numbers = [4, 7, 10, 13, 18];

const evenNumbers = numbers.filter((num) => num % 2 === 0);
const doubled = numbers.map((num) => num * 2);
const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(evenNumbers, doubled, total);
```

### 6. Objects

Objects represent real-world entities.

```js
const user = {
  name: "Nina",
  age: 22,
  isAdmin: false,
  greet() {
    return `Hello, ${this.name}`;
  },
};

console.log(user.greet());
```

### 7. DOM and Events

JavaScript connects logic with the interface.

```js
const title = document.querySelector("#title");
const button = document.querySelector("#reviewBtn");

button.addEventListener("click", () => {
  title.textContent = "JavaScript Review Running";
  title.style.color = "teal";
});
```

### 8. Async JavaScript and Fetch

Use `async/await` for readable async code.

```js
async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const data = await response.json();
    console.log(data.slice(0, 3));
  } catch (error) {
    console.error("Error:", error.message);
  }
}

loadUsers();
```

### 9. localStorage Basics

Use localStorage for simple browser persistence.

```js
const key = "review-theme";
localStorage.setItem(key, "dark");

const savedTheme = localStorage.getItem(key);
console.log(savedTheme);
```

## Common Mistakes

- Using `var` instead of `let` or `const`
- Forgetting `return` inside functions
- Mutating arrays/objects accidentally
- Using `for...in` on arrays when `for...of` is better
- Not checking `response.ok` in fetch requests
- Ignoring try/catch in async code
- Forgetting that localStorage stores strings only

## Best Practices

- Prefer `const` by default
- Write small, reusable functions
- Use array methods for readability
- Name variables clearly (`userList`, `totalPrice`, not `x`, `y`)
- Separate DOM logic from data logic when possible
- Always handle possible API errors

## Practice Tasks

See `tasks.md` and `exercises.md`.

## Mini Project

Task Tracker Review App:

- Add tasks from an input
- Render task list in the DOM
- Toggle complete state
- Filter completed tasks
- Save tasks in localStorage

## Summary

Strong JavaScript means combining fundamentals with practical UI and data workflows. If you can solve tasks from this lesson confidently, you are ready for more advanced frontend patterns.
