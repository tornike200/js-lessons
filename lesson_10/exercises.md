# Lesson 10 - Exercises: DOM and Events

Practice these short examples before class tasks.

---

## Exercise 1 - Select by Id

```js
const title = document.getElementById("title");
console.log(title);
```

---

## Exercise 2 - Select by Class

```js
const paragraph = document.querySelector(".para2");
console.log(paragraph);
```

---

## Exercise 3 - Select All Paragraphs

```js
const allP = document.querySelectorAll("p");
console.log(allP.length);
```

---

## Exercise 4 - Change Text

```js
const title = document.querySelector("#title");
title.textContent = "Updated with JavaScript";
```

---

## Exercise 5 - Change Inline Style

```js
const btn = document.querySelector("#btn1");
btn.style.backgroundColor = "green";
btn.style.color = "white";
```

---

## Exercise 6 - Add Class

```js
const p = document.querySelector(".para2");
p.classList.add("testClass");
```

---

## Exercise 7 - Remove Class

```js
const p = document.querySelector(".testClass2");
p.classList.remove("testClass2");
```

---

## Exercise 8 - Toggle Visibility

```js
const title = document.querySelector("#title");
title.classList.toggle("hidden");
```

---

## Exercise 9 - Click Event

```js
const btn = document.querySelector("#btn1");

btn.addEventListener("click", () => {
  console.log("Clicked");
});
```

---

## Exercise 10 - Open and Close Modal

```js
const showBtn = document.querySelector(".showBtn");
const closeBtn = document.querySelector("#close");
const modal = document.querySelector(".modal");

showBtn.addEventListener("click", () => modal.classList.remove("hidden"));
closeBtn.addEventListener("click", () => modal.classList.add("hidden"));
```
