# Lesson 6 - Exercises: DOM Manipulation Intro

Practice exercises with worked examples before doing the class tasks.

---

## Exercise 1 - Select a Heading

```js
const heading = document.querySelector("h2");
console.log(heading);
```

This selects the first `h2` element in the page.

---

## Exercise 2 - Select by id and Change Text

```js
const title2 = document.querySelector("#title2");
title2.textContent = "Updated subtitle";
```

---

## Exercise 3 - Select by Class

```js
const firstParagraph = document.querySelector(".para1");
console.log(firstParagraph.textContent);
```

---

## Exercise 4 - Select Multiple Paragraphs

```js
const paragraphs = document.querySelectorAll(".para");
console.log(paragraphs);
```

---

## Exercise 5 - Style One Element

```js
const heading = document.querySelector("h2");
heading.style.color = "white";
heading.style.backgroundColor = "teal";
heading.style.padding = "8px";
```

---

## Exercise 6 - Style Multiple Elements with `forEach`

```js
const paragraphs = document.querySelectorAll(".para");

paragraphs.forEach((item) => {
  item.style.color = "orange";
});
```

---

## Exercise 7 - Add a Click Event

```js
const button = document.querySelector("#btn1");
button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

---

## Exercise 8 - Toggle Background Color on Click

```js
const heading = document.querySelector("h2");
const button = document.querySelector("#btn1");
let isBlue = true;

button.addEventListener("click", () => {
  if (isBlue) {
    heading.style.backgroundColor = "tomato";
    isBlue = false;
  } else {
    heading.style.backgroundColor = "steelblue";
    isBlue = true;
  }
});
```

---

## Exercise 9 - Show Element Count

```js
const paragraphs = document.querySelectorAll(".para");
console.log("Total paragraphs:", paragraphs.length);
```

---

## Exercise 10 - Combine Text + Style Update

```js
const heading = document.querySelector("h2");
heading.textContent = "DOM lesson is running";
heading.style.borderRadius = "10px";
heading.style.textTransform = "uppercase";
```
