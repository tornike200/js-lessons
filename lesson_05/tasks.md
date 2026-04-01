# Lesson 5 - In-Class Tasks: Arrow Functions

Complete all 20 tasks in class. Use `console.log()` to print results.

---

1. Write an arrow function `sayHello` that prints `"Hello!"` to the console. Call it.

---

2. Write an arrow function `greet(name)` that returns `"Hello, [name]!"`.
   Call it with your own name and print the result.

---

3. Convert the following standard function to an arrow function:

   ```js
   function double(n) {
     return n * 2;
   }
   ```

   Print the result of calling it with `8`.

---

4. Write an arrow function `add(a, b)` that returns the sum of two numbers.
   Print the result of `add(5, 10)`.

---

5. Write an arrow function `multiply(a, b)` using **implicit return** (no `{}`, no `return`).
   Print the result of `multiply(3, 7)`.

---

6. Write an arrow function `square(n)` with a **single parameter** and implicit return.
   Print the result of `square(9)`.

---

7. Write an arrow function `isEven(n)` that returns `"even"` if the number is even, or `"odd"` if not.
   Test with `isEven(4)` and `isEven(7)`.

---

8. Write an arrow function `getMax(a, b)` that returns the bigger of two numbers.
   Test with `getMax(12, 7)` and `getMax(5, 20)`.

---

9. Write an arrow function `greetUser(name, age)` that returns:
   `"Hello [name], you are [age] years old"`
   Use a template literal. Print the result.

---

10. Write an arrow function `celsiusToFahrenheit(c)` that converts Celsius to Fahrenheit.
    Formula: `(c * 9/5) + 32`
    Print: `0 Celsius = 32 Fahrenheit`

---

11. Write an arrow function `getFullName(firstName, lastName)` that returns the full name as one string.
    Example: `getFullName("Ana", "Kalandadze")` → `"Ana Kalandadze"`

---

12. Write an arrow function `isPositive(n)` that returns:
    - `"positive"` if the number is greater than 0
    - `"negative"` if less than 0
    - `"zero"` if equal to 0

    Test with three different numbers.

---

13. Write an arrow function `calcArea(width, height)` that returns the area of a rectangle.
    Print the area of a rectangle with width `6` and height `4`.

---

14. Write an arrow function `getCircleArea(r)` that returns the area of a circle.
    Formula: `Math.PI * r * r`
    Print the area for radius `5`. Round the result with `Math.round()`.

---

15. Write an arrow function `power(base, exp)` that returns `base` raised to the power of `exp`.
    Use `Math.pow()`.
    Print the result of `power(2, 8)`.

---

16. Write an arrow function `getDiscount(price, percent)` that returns the final price after discount.
    Formula: `price - (price * percent / 100)`
    Print: `Price after 20% discount on 150 is: [result]`

---

17. Write an arrow function `isAdult(age)` that returns `true` if age is 18 or older, `false` otherwise.
    Test with `isAdult(17)` and `isAdult(20)`.

---

18. Write an arrow function `toCaps(str)` that returns the string in **upper case**.
    Use `.toUpperCase()`.
    Print the result of `toCaps("javascript is fun")`.

---

19. Write an arrow function `countChars(str)` that returns the number of characters in a string.
    Print the result of `countChars("Hello World")`.

---

20. Write an arrow function `average(a, b, c)` that returns the average of three numbers.
    Test with `average(10, 20, 30)` — should return `20`.
