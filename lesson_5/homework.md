# Lesson 5 - Homework: Arrow Functions

Complete all 20 tasks at home. These are harder than the in-class tasks.
Use `console.log()` to print all results.

---

1. Write an arrow function `isPrime(n)` that returns `true` if `n` is a prime number, `false` otherwise.
   A prime number is only divisible by 1 and itself (example: 2, 3, 5, 7, 11...).
   Test with: `isPrime(7)` → `true`, `isPrime(9)` → `false`.

---

2. Write an arrow function `fibonacci(n)` that returns the nth number in the Fibonacci sequence.
   Use **recursion**.
   - `fibonacci(1)` → `1`
   - `fibonacci(6)` → `8`
   - Sequence: 1, 1, 2, 3, 5, 8, 13, 21...

---

3. Write an arrow function `reverseString(str)` that returns the string reversed.
   Do NOT use `.split()`, `.reverse()`, or `.join()`.
   Use a loop instead.
   Example: `reverseString("hello")` → `"olleh"`

---

4. Write an arrow function `countVowels(str)` that counts the number of vowels (`a, e, i, o, u`) in a string.
   It should be case-insensitive.
   Example: `countVowels("JavaScript")` → `3`

---

5. Write an arrow function `sumDigits(n)` that returns the sum of all digits in a number.
   Example: `sumDigits(1234)` → `10` (1 + 2 + 3 + 4)
   Use `.toString()` and a loop.

---

6. Write an arrow function `longestWord(sentence)` that returns the longest word in a sentence.
   Example: `longestWord("I love JavaScript programming")` → `"programming"`

---

7. Write an arrow function `capitalize(str)` that capitalizes the **first letter of each word**.
   Do NOT use any library method for this — build the logic yourself.
   Example: `capitalize("hello world from js")` → `"Hello World From Js"`

---

8. Write an arrow function `flattenArray(arr)` that takes an array of arrays and returns one flat array.
   Do NOT use `.flat()`.
   Example: `flattenArray([[1, 2], [3, 4], [5]])` → `[1, 2, 3, 4, 5]`

---

9. Write an arrow function `removeDuplicates(arr)` that returns a new array with no duplicate values.
   Do NOT use `Set`.
   Example: `removeDuplicates([1, 2, 2, 3, 4, 4, 5])` → `[1, 2, 3, 4, 5]`

---

10. Write an arrow function `chunk(arr, size)` that splits an array into groups of `size`.
    Example: `chunk([1, 2, 3, 4, 5, 6], 2)` → `[[1, 2], [3, 4], [5, 6]]`
    Example: `chunk([1, 2, 3, 4, 5], 3)` → `[[1, 2, 3], [4, 5]]`

---

11. Write an arrow function `compose(f, g)` that returns a new function.
    The returned function applies `g` first, then `f` to the result.
    Example:
    ```js
    const add1 = (x) => x + 1;
    const double = (x) => x * 2;
    const doubleThenAdd1 = compose(add1, double);
    doubleThenAdd1(5); // → 11   (5 * 2 = 10, then 10 + 1 = 11)
    ```

---

12. Write an arrow function `memoize(fn)` that caches the results of `fn`.
    If the same argument is passed again, return the cached result instead of calling `fn` again.
    Example:
    ```js
    const slowSquare = (x) => x * x;
    const fastSquare = memoize(slowSquare);
    fastSquare(5); // calculates 25
    fastSquare(5); // returns 25 from cache
    ```

---

13. Write an arrow function `pipe(...fns)` that takes any number of functions and returns a new function.
    The returned function applies each function from left to right.
    Example:
    ```js
    const add2 = (x) => x + 2;
    const triple = (x) => x * 3;
    const subtract1 = (x) => x - 1;
    const transform = pipe(add2, triple, subtract1);
    transform(5); // → 20   (5+2=7, 7*3=21, 21-1=20)
    ```

---

14. Write an arrow function `debounce(fn, delay)` that takes a function and delay in milliseconds.
    It should return a new function that:
    - Waits `delay` ms before calling `fn`
    - If called again before the delay ends, it resets the timer
      Use `setTimeout` and `clearTimeout`.

---

15. Write an arrow function `deepEqual(a, b)` that checks if two objects are deeply equal.
    It should compare nested objects and arrays correctly.
    Example:
    ```js
    deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } }); // → true
    deepEqual({ a: 1 }, { a: 2 }); // → false
    ```

---

16. Write an arrow function `groupBy(arr, key)` that groups an array of objects by a given key.
    Example:
    ```js
    const people = [
      { name: "Ana", city: "Tbilisi" },
      { name: "Giorgi", city: "Kutaisi" },
      { name: "Nino", city: "Tbilisi" },
    ];
    groupBy(people, "city");
    // → { Tbilisi: [{...}, {...}], Kutaisi: [{...}] }
    ```

---

17. Write an arrow function `curry(fn)` that transforms a function into a curried version.
    A curried function takes one argument at a time.
    Example:
    ```js
    const add = (a, b) => a + b;
    const curriedAdd = curry(add);
    curriedAdd(3)(5); // → 8
    ```

---

18. Write an arrow function `throttle(fn, limit)` that ensures `fn` is called at most once every `limit` ms.
    Use `Date.now()` to track time between calls.

---

19. Write an arrow function `zip(arr1, arr2)` that combines two arrays into an array of pairs.
    Example:
    ```js
    zip([1, 2, 3], ["a", "b", "c"]);
    // → [[1, "a"], [2, "b"], [3, "c"]]
    ```
    If the arrays are different lengths, stop at the shorter one.

---

20. **Mini Project — Build a Calculator Using Arrow Functions Only**

    Create 5 arrow functions: `add`, `subtract`, `multiply`, `divide`, `power`.
    Then write an arrow function `calculate(operation, a, b)` that:
    - Takes an operation name as a string (`"add"`, `"subtract"`, `"multiply"`, `"divide"`, `"power"`)
    - Calls the correct arrow function
    - Returns the result, or `"Unknown operation"` if the name is not recognized

    Example:

    ```js
    calculate("add", 10, 5); // → 15
    calculate("multiply", 4, 3); // → 12
    calculate("divide", 20, 4); // → 5
    calculate("mod", 10, 3); // → "Unknown operation"
    ```
