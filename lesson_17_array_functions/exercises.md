# Lesson 17 - Exercises: Array Functions in JavaScript

Practice exercises with examples before doing the class tasks.

---

## Exercise 1 - Filter Even Numbers

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evens = numbers.filter((number) => number % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]
```

---

## Exercise 2 - Map to Uppercase

```js
const words = ["hello", "world", "javascript"];
const uppercase = words.map((word) => word.toUpperCase());
console.log(uppercase); // ["HELLO", "WORLD", "JAVASCRIPT"]
```

---

## Exercise 3 - Find First Match

```js
const numbers = [5, 12, 8, 15, 3, 20];
const firstBig = numbers.find((num) => num > 10);
console.log(firstBig); // 12
```

---

## Exercise 4 - Reduce Sum

```js
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 15
```

---

## Exercise 5 - Filter Objects

```js
const users = [
  { name: "Ana", age: 25 },
  { name: "Giorgi", age: 17 },
  { name: "Mariam", age: 19 },
];
const adults = users.filter((user) => user.age >= 18);
console.log(adults);
```

---

## Exercise 6 - some() Check

```js
const temperatures = [22, 24, 18, 31, 27];
const hasHotDay = temperatures.some((temp) => temp > 30);
console.log(hasHotDay); // true
```

---

## Exercise 7 - every() Check

```js
const amounts = [12, 8, 20, 5];
const allPositive = amounts.every((amount) => amount > 0);
console.log(allPositive); // true
```

---

## Exercise 8 - includes() Check

```js
const roles = ["admin", "editor", "user"];
console.log(roles.includes("editor")); // true
console.log(roles.includes("guest")); // false
```

---

## Exercise 9 - findIndex() Example

```js
const marks = [55, 72, 81, 49, 90];
const firstFailIndex = marks.findIndex((mark) => mark < 50);
console.log(firstFailIndex); // 3
```

---

## Exercise 10 - Chaining Methods

```js
const numbers = [1, 2, 3, 4, 5, 6];

const finalValue = numbers
  .filter((num) => num % 2 === 0)
  .map((num) => num * 10)
  .reduce((acc, num) => acc + num, 0);

console.log(finalValue); // 120
```

---

## Exercise 11 - sort(), slice(), splice()

```js
const values = [14, 3, 27, 9, 18];

const sorted = [...values].sort((a, b) => a - b);
console.log(sorted); // [3, 9, 14, 18, 27]

const middle = sorted.slice(1, 4);
console.log(middle); // [9, 14, 18]

const copy = [...values];
copy.splice(2, 1, 100);
console.log(copy); // [14, 3, 100, 9, 18]
```

---
