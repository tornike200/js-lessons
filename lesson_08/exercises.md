# Lesson 8 - Exercises: Loops in JavaScript

Practice exercises with examples before tasks.

---

## Exercise 1 - Basic `for` Loop

```js
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

---

## Exercise 2 - `for` Loop Through an Array

```js
const colors = ["red", "green", "blue"];

for (let i = 0; i < colors.length; i++) {
  console.log(i, colors[i]);
}
```

---

## Exercise 3 - Count Backwards

```js
const colors = ["red", "green", "blue"];

for (let i = colors.length - 1; i >= 0; i--) {
  console.log(colors[i]);
}
```

---

## Exercise 4 - `while` Loop

```js
let count = 0;

while (count < 5) {
  console.log("count:", count);
  count++;
}
```

---

## Exercise 5 - `while` Loop Through an Array

```js
const names = ["Ana", "Luka", "Mia"];
let i = 0;

while (i < names.length) {
  console.log(names[i]);
  i++;
}
```

---

## Exercise 6 - `do...while` Loop

```js
let n = 0;

do {
  console.log("n is:", n);
  n++;
} while (n < 3);
```

---

## Exercise 7 - `for...of` Loop

```js
const fruits = ["apple", "banana", "orange"];

for (let fruit of fruits) {
  console.log(fruit);
}
```

---

## Exercise 8 - `for...of` Over a String

```js
const word = "hello";

for (let char of word) {
  console.log(char);
}
```

---

## Exercise 9 - `for...in` Over an Object

```js
const person = { name: "Giorgi", age: 25, city: "Tbilisi" };

for (let key in person) {
  console.log(key, ":", person[key]);
}
```

---

## Exercise 10 - `break` and `continue`

```js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 5) break; // stop when we reach 5
  if (numbers[i] % 2 === 0) continue; // skip even numbers
  console.log(numbers[i]);
}
```

---

## Exercise 9 - `map` + `filter` Chained

```js
const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers.filter((num) => num % 2 === 0).map((num) => num * 10);

console.log(result); // [20, 40, 60]
```

---

## Exercise 10 - `map` Returning Objects

```js
const names = ["Ana", "Luka", "Mia"];

const users = names.map((name, index) => {
  return { id: index + 1, name: name };
});

console.log(users);
```
