# Lesson 7 - Student Notes: Arrays Basics

## What is an Array?

An array stores multiple values in one variable.

```js
const fruits = ["apple", "banana", "orange"];
```

---

## 1. Indexing

Array indexes start from `0`.

```js
const fruits = ["apple", "banana", "orange"];
console.log(fruits[0]); // apple
console.log(fruits[2]); // orange
```

---

## 2. Length

Use `.length` to get total items.

```js
console.log(fruits.length); // 3
```

---

## 3. Add and Remove Items

```js
const numbers = [1, 2, 3];

numbers.push(4); // add to end
numbers.pop(); // remove from end
numbers.unshift(0); // add to start
numbers.shift(); // remove from start
```

---

## 4. Change Existing Value

```js
const users = ["Ana", "Luka", "Mia"];
users[1] = "Nika";
console.log(users); // ["Ana", "Nika", "Mia"]
```

---

## 5. Copy vs Cut

```js
const letters = ["a", "b", "c", "d"];

const copied = letters.slice(1, 3); // copy: ["b", "c"]
const cut = letters.splice(1, 2); // cut: ["b", "c"] and changes original
```

---

## 6. Reverse and Sort

```js
const values = ["c", "a", "b"];
values.reverse(); // ["b", "a", "c"]
values.sort(); // ["a", "b", "c"]
```

---

## 7. Split and Join

```js
const name = "JavaScript";
const chars = name.split("");
chars.reverse();
const reversed = chars.join("");
console.log(reversed); // tpircSavaJ
```

---

## Key Points to Remember

- Arrays keep related values in one place.
- Index starts at `0`.
- `slice` does not change original array.
- `splice` changes original array.
- `split` turns string into array.
- `join` turns array into string.
