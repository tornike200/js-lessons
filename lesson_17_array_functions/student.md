# Lesson 17 - Student Notes: Array Functions in JavaScript

## What are Array Functions?

Array functions are methods that help us work with arrays. They allow us to filter, transform, and iterate through array elements in powerful ways.

## filter()

The `filter()` method returns a new array with elements that pass a test.

```js
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4, 6]
```

## map()

The `map()` method creates a new array by transforming each element.

```js
const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6]
```

## find()

The `find()` method returns the first element that passes a test.

```js
const numbers = [1, 2, 3, 4, 5];
const result = numbers.find((num) => num > 3);
console.log(result); // 4
```

## reduce()

The `reduce()` method combines all elements into a single value.

```js
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 10
```

## some()

The `some()` method returns `true` if at least one element passes a test.

```js
const scores = [45, 72, 30, 88];
const hasPassed = scores.some((score) => score >= 50);
console.log(hasPassed); // true
```

## every()

The `every()` method returns `true` only if all elements pass a test.

```js
const ages = [19, 22, 31, 18];
const allAdults = ages.every((age) => age >= 18);
console.log(allAdults); // true
```

## includes()

The `includes()` method checks if a value exists in an array.

```js
const colors = ["red", "green", "blue"];
console.log(colors.includes("green")); // true
console.log(colors.includes("black")); // false
```

## findIndex()

The `findIndex()` method returns the index of the first element that matches a test.

```js
const prices = [20, 15, 30, 12];
const index = prices.findIndex((price) => price < 15);
console.log(index); // 3
```

## forEach()

The `forEach()` method runs a function for each element in the array.

```js
const names = ["Ana", "Luka", "Nino"];
names.forEach((name) => {
  console.log(`Hello, ${name}`);
});
```

## Method Chaining

You can combine multiple array methods for cleaner code.

```js
const numbers = [4, 7, 10, 13, 18];

const result = numbers
  .filter((num) => num > 8)
  .map((num) => num * 2)
  .reduce((acc, num) => acc + num, 0);

console.log(result); // 82
```

## sort()

The `sort()` method sorts array elements. For numbers, use a compare function.

```js
const numbers = [10, 2, 35, 7];
numbers.sort((a, b) => a - b);
console.log(numbers); // [2, 7, 10, 35]
```

## slice() and splice()

- `slice(start, end)` returns a new copied part of an array.
- `splice(start, deleteCount, ...items)` changes the original array.

```js
const fruits = ["apple", "banana", "kiwi", "orange"];

const copiedPart = fruits.slice(1, 3);
console.log(copiedPart); // ["banana", "kiwi"]

fruits.splice(2, 1, "mango");
console.log(fruits); // ["apple", "banana", "mango", "orange"]
```

---
