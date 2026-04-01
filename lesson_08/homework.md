# Lesson 8 - Homework: Loops in JavaScript

Complete all tasks at home. These extend what was covered in class.

---

1. Use a `for` loop to print all even numbers from 1 to 50.

---

2. Use a `for` loop to print all odd numbers from 1 to 50.

---

3. Use a `for` loop to calculate the sum of numbers from 1 to 100. Print the result.

---

4. Create an array `temperatures = [22, 35, 18, 40, 12, 28, 33]`. Use a `for` loop to find the highest temperature and print it.

---

5. Use a `for` loop to find the lowest temperature in `temperatures`.

---

6. Use a `for` loop to print each temperature with a label: `"Temp: 22°C"`.

---

7. Create an array `products = ["laptop", "phone", "tablet", "monitor", "keyboard"]`. Use `for...of` to print each product.

---

8. Use a `for` loop to print each product with its index: `"0: laptop"`.

---

9. Use a `for` loop with `continue` to skip and not print the product `"tablet"`.

---

10. Create array `scores = [55, 82, 40, 91, 73, 60, 88, 49]`. Use a `for` loop to count how many scores are passing (70 or above).

---

11. Use a `for` loop to build a new array `passingScores` that contains only scores 70 and above.

---

12. Use a `for` loop to calculate the average of all scores in `scores`. Print the average.

---

13. Use a `for` loop to print a grade label for each score:
    - 90 and above → `"A"`
    - 70–89 → `"B"`
    - below 70 → `"C"`

---

14. Create an object `student = { name: "Ana", age: 21, grade: "A", city: "Tbilisi" }`. Use `for...in` to print each key and value.

---

15. Use a `while` loop to count down from 10 to 1 and print each number.

---

16. Write a `do...while` loop that asks (simulates) printing a number starting from 1, doubling each time, until the number exceeds 200. Print each value and the total count of steps.

---

17. Create an array `words = ["JavaScript", "Python", "HTML", "CSS", "TypeScript"]`. Use a `for` loop to find and print the longest word.

---

18. Use a `for` loop to reverse the `words` array manually into a new array `reversedWords` without using `.reverse()`. Print `reversedWords`.

---

19. Use `for...of` to loop over `products` and build a single string of all products separated by `" | "`. Print the string.

---

20. Use a `for` loop to go through `scores`, add 5 bonus points to each, and store results in a new array `boostedScores`. Print `boostedScores`.

---

10. Create array `scores = [55, 82, 40, 91, 73, 60, 88, 49]`.

---

11. Use `filter` to get scores that are 70 or above (passing scores).

---

12. Use `filter` to get failing scores (below 70).

---

13. Use `map` to add 5 bonus points to every score.

---

14. Chain `filter` and `map`: keep passing scores, then add 5 bonus points.

---

15. Use `find` to get the first score above 90.

---

16. Create a function `summarizeArray(arr)` that uses `forEach` to:
    - count total items
    - print each item with its index

---

17. Call `summarizeArray` with `scores` and `products`.

---

18. Use `map` to convert `scores` into grade labels:
    - 90 and above → `"A"`
    - 70–89 → `"B"`
    - below 70 → `"C"`

---

19. Chain `filter`, `map`, and `forEach`: from `scores`, keep only scores above 70, add 5 points, then print each result.

---

20. Use `findIndex` on the result of task 18 to find the first `"A"` grade.
