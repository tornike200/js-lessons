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

---
