# Lesson 18 - Exercises: JavaScript Review

Practice exercises with examples before doing class tasks.

---

## Exercise 1 - Variables and Reassignment

```js
const academyName = "Frontend Academy";
let lessonNumber = 18;
lessonNumber = 19;

console.log(academyName, lessonNumber);
```

---

## Exercise 2 - Conditional Logic

```js
const age = 17;

if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}
```

---

## Exercise 3 - Loop Through Array

```js
const tech = ["HTML", "CSS", "JavaScript"];

for (const item of tech) {
  console.log(item);
}
```

---

## Exercise 4 - Function Basics

```js
function greet(name) {
  return `Welcome, ${name}`;
}

console.log(greet("Ana"));
```

---

## Exercise 5 - map()

```js
const scores = [20, 30, 40];
const plusFive = scores.map((score) => score + 5);

console.log(plusFive);
```

---

## Exercise 6 - filter()

```js
const ages = [13, 19, 25, 16, 30];
const adults = ages.filter((item) => item >= 18);

console.log(adults);
```

---

## Exercise 7 - reduce()

```js
const cart = [12, 7, 21];
const total = cart.reduce((sum, price) => sum + price, 0);

console.log(total);
```

---

## Exercise 8 - Object + Method

```js
const product = {
  title: "Keyboard",
  price: 99,
  inStock: true,
  label() {
    return `${this.title} - ${this.price} USD`;
  },
};

console.log(product.label());
```

---

## Exercise 9 - DOM Text Update

```js
const titleEl = document.querySelector("#title");
titleEl.textContent = "JS Review Started";
```

---

## Exercise 10 - Event Handling

```js
const btn = document.querySelector("#reviewBtn");
let active = false;

btn.addEventListener("click", () => {
  active = !active;
  btn.textContent = active ? "Active" : "Inactive";
});
```

---

## Exercise 11 - Async/Await + Fetch

```js
async function getPosts() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=2");

    if (!res.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await res.json();
    console.log(data);
  } catch (error) {
    console.error(error.message);
  }
}

getPosts();
```

---

## Exercise 12 - localStorage

```js
localStorage.setItem("lesson", "js-review");
const lesson = localStorage.getItem("lesson");
console.log(lesson);
```

---
