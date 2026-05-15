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
