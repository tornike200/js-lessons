# Lesson 6 - Student Notes: DOM Manipulation Intro

## What is the DOM?

DOM stands for **Document Object Model**.
It is the browser's JavaScript representation of the HTML page.

With DOM manipulation, JavaScript can:

- read elements
- change text
- change styles
- react to user actions

---

## 1. Select an Element

```js
const title = document.querySelector("h2");
console.log(title);
```

`querySelector()` returns the **first** matching element.

---

## 2. Select by id, class, or tag

```js
const byId = document.querySelector("#title2");
const byClass = document.querySelector(".para1");
const byTag = document.querySelector("p");
```

- `#id` for id
- `.class` for class
- `tagName` for HTML tag

---

## 3. Select Multiple Elements

```js
const paras = document.querySelectorAll(".para");
console.log(paras);
```

`querySelectorAll()` returns a `NodeList` (list-like collection).

---

## 4. Change Text with `textContent`

```js
const subtitle = document.querySelector("#title2");
subtitle.textContent = "New subtitle from JavaScript";
```

---

## 5. Change Styles from JavaScript

```js
const title = document.querySelector("h2");
title.style.color = "white";
title.style.backgroundColor = "tomato";
title.style.padding = "10px";
```

---

## 6. Loop Through Multiple Elements

```js
const paras = document.querySelectorAll(".para");

paras.forEach((el) => {
  el.style.color = "orange";
});
```

---

## 7. React to Clicks with Events

```js
const btn = document.querySelector("#btn1");

btn.addEventListener("click", () => {
  console.log("Button clicked");
});
```

---

## 8. Toggle State with Boolean

```js
let isActive = false;

btn.addEventListener("click", () => {
  if (!isActive) {
    title.style.backgroundColor = "red";
    isActive = true;
  } else {
    title.style.backgroundColor = "yellow";
    isActive = false;
  }
});
```

---

## Key Points to Remember

- DOM lets JavaScript control the web page.
- Use `querySelector` for one element, `querySelectorAll` for many.
- Use `textContent` to update text.
- Use `element.style` to update CSS from JS.
- Use `addEventListener` to respond to user actions.
