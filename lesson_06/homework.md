# Lesson 6 - Homework: DOM Manipulation Intro

Complete all 20 tasks at home. These are harder than the in-class tasks.
Use `console.log()` where needed.

---

1. Select the `body` element and change its background color.

---

2. Select all `p` elements and print how many there are.

---

3. Change the text of the first `p` element to `This paragraph was changed by JS`.

---

4. Change the font size of all paragraphs to `20px`.

---

5. Create a function `highlightText(selector, color)` that changes text color of selected elements.
   Test it with `.para` and `teal`.

---

6. Create a function `setHeadingStyles()` that styles `h2` with at least 4 style properties.

---

7. Add a click event to `#btn1` that changes `h3` text every time the button is clicked.

---

8. Create a click counter variable. On every click, print `Clicked X times`.

---

9. When click count reaches 5, change button text to `Stop`.

---

10. Create a second button in HTML with id `resetBtn`.
    When clicked, it should reset heading styles to default values.

---

11. Use `querySelectorAll` and `forEach` to alternate colors:
    - even index paragraphs -> blue
    - odd index paragraphs -> green

---

12. Create an array of 5 strings and print each one inside a loop.

---

13. Use DOM to print one array item inside `h3` each time button is clicked.
    After last item, start again from first item.

---

14. Create a function `toggleClassDemo()` that toggles between two style states using a boolean.

---

15. Add `mouseenter` and `mouseleave` events on `h2`:
    - on enter -> background orange
    - on leave -> background back to original

---

16. Select all paragraphs and append ` (edited)` to each paragraph text.

---

17. Create a function `makeUppercase(selector)` that converts selected elements' text to uppercase.

---

18. Build a small theme switcher:
    - first click -> light theme
    - second click -> dark theme
    - third click -> light theme again

---

19. Create a mini object:
    ```js
    const lessonInfo = { title: "DOM", level: "Beginner", duration: 90 };
    ```
    Print all values in the console and show one value in the page.

---

20. **Mini Project - Interactive Title Controller**

    Build controls with buttons:
    - `Increase Size`
    - `Decrease Size`
    - `Change Color`
    - `Reset`

    Using DOM manipulation and events, make the `h2` title interactive.
