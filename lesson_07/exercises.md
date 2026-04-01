# Lesson 7 - Exercises: Arrays Basics

Practice exercises with examples before tasks.

---

## Exercise 1 - Create an Array

```js
const colors = ["red", "green", "blue"];
console.log(colors);
```

---

## Exercise 2 - Read by Index

```js
const colors = ["red", "green", "blue"];
console.log(colors[1]);
```

---

## Exercise 3 - Use Length

```js
const colors = ["red", "green", "blue"];
console.log(colors.length);
```

---

## Exercise 4 - Add to End

```js
const colors = ["red", "green"];
colors.push("blue");
console.log(colors);
```

---

## Exercise 5 - Remove from End

```js
const colors = ["red", "green", "blue"];
colors.pop();
console.log(colors);
```

---

## Exercise 6 - Add to Start

```js
const colors = ["green", "blue"];
colors.unshift("red");
console.log(colors);
```

---

## Exercise 7 - Remove from Start

```js
const colors = ["red", "green", "blue"];
colors.shift();
console.log(colors);
```

---

## Exercise 8 - Copy with Slice

```js
const nums = [10, 20, 30, 40, 50];
const part = nums.slice(1, 4);
console.log(part);
console.log(nums);
```

---

## Exercise 9 - Cut with Splice

```js
const nums = [10, 20, 30, 40, 50];
const removed = nums.splice(1, 2);
console.log(removed);
console.log(nums);
```

---

## Exercise 10 - Reverse String with Split + Join

```js
const word = "lesson";
const reversed = word.split("").reverse().join("");
console.log(reversed);
```
