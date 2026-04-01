# Lesson 7 - Solutions: Arrays Basics

Reference solutions for key patterns from tasks and homework.

## Pattern 1 - First and Last Item

```js
const cities = ["Tbilisi", "Kutaisi", "Batumi", "Rustavi"];

const first = cities[0];
const last = cities[cities.length - 1];

console.log(first, last);
```

## Pattern 2 - Add and Remove

```js
const products = ["mouse", "keyboard", "laptop"];

products.push("tablet");
products.unshift("phone");

const lastRemoved = products.pop();
const firstRemoved = products.shift();

console.log(products);
console.log(lastRemoved, firstRemoved);
```

## Pattern 3 - Slice vs Splice

```js
const nums = [10, 20, 30, 40, 50];

const copied = nums.slice(1, 4); // [20, 30, 40]
const removed = nums.splice(1, 2); // [20, 30], nums becomes [10, 40, 50]

console.log(copied);
console.log(removed);
console.log(nums);
```

## Pattern 4 - Reverse a Word

```js
const word = "frontend";
const reversedWord = word.split("").reverse().join("");

console.log(reversedWord);
```

## Pattern 5 - Numeric Sort

```js
const prices = [120, 80, 250, 60, 300];
prices.sort((a, b) => a - b);

console.log(prices);
```

## Pattern 6 - Helper Function

```js
function printArrayInfo(arr) {
  console.log("Length:", arr.length);
  console.log("First:", arr[0]);
  console.log("Last:", arr[arr.length - 1]);
}
```
