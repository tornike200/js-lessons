# Lesson 10 - Student Notes: DOM and Events

## 1. What is DOM?

DOM means Document Object Model.
It is the JavaScript representation of your HTML page.

- `window` is the browser tab environment.
- `document` is the HTML page inside that window.

## 2. Selecting Elements

```js
const title = document.getElementById("title");
const firstParagraph = document.querySelector("p");
const allParagraphs = document.querySelectorAll("p");
```

## 3. Changing Text

```js
title.textContent = "New Title";
firstParagraph.innerHTML = "<strong>Hello</strong>";
```

## 4. Changing Styles

```js
title.style.color = "tomato";
title.style.fontSize = "32px";
```

## 5. Working with Classes

```js
title.classList.add("active");
title.classList.remove("active");
title.classList.toggle("hidden");
```

## 6. Events

```js
const button = document.querySelector("#btn1");

button.addEventListener("click", () => {
  console.log("Button clicked");
});
```

## 7. Typical Beginner Pattern

1. Select element
2. Add event listener
3. Update text/style/class in callback

```js
const hideBtn = document.querySelector("#hideAndShowBtn");
const titleEl = document.querySelector("#title");

hideBtn.addEventListener("click", () => {
  titleEl.classList.toggle("hidden");
});
```
