# Lesson 9 - In-Class Tasks: Objects in JavaScript

Complete all 20 tasks in class. Use `console.log()` for outputs.

---

1. Create an object `student` with keys `name`, `age`, and `city`. Print it.

---

2. Print `student.name` using dot notation.

---

3. Print `student["city"]` using bracket notation.

---

4. Create variable `keyName = "age"` and print `student[keyName]`.

---

5. Update `student.age` to a new value and print the object.

---

6. Add a new property `isActive` with value `true`.

---

7. Add a new property `hobby` with any string value.

---

8. Delete the `isActive` property and print the object again.

---

9. Create object `car = { brand: "Toyota", model: "Corolla", year: 2020 }` and print only the model.

---

10. Update `car.year` to `2024`.

---

11. Add property `color` to `car`.

---

12. Create object `book` with `title`, `author`, and `pages`, then print all three values one by one.

---

13. Create nested object:

```js
const user = {
  name: "Ana",
  address: {
    city: "Tbilisi",
    street: "Aghmashenebeli",
  },
};
```

Print `user.address.city`.

---

14. Add `zipCode` inside `user.address`.

---

15. Create object `person` with method `greet` that prints `Hello, I am ...`.

---

16. Call `person.greet()`.

---

17. Use `for...in` to print all keys in `car`.

---

18. Use `for...in` to print all keys and values in `book`.

---

19. Create object `course` with keys `title`, `lessonCount`, `teacher`, and `isOnline`. Loop through it with `for...in`.

---

20. Build and print a summary object named `profileSummary` with:
    - fullName
    - city
    - hasHobby
