# Script 4 Beginner Practice Tasks

Use the code and ideas from `script4.js` to solve the tasks below.

## Beginner Tasks

### 1. Create a user object

Create an object named `student` with properties `name` and `surname`.

### 2. Write a greeting function

Create a function `sayHi(user)` that logs: `Hi, I am Name Surname`.

### 3. Use destructuring in function parameters

Rewrite `sayHi(user)` so it receives `{ name, surname }` directly.

### 4. Test logical AND with `true`

Create a variable using `true && "hello"` and log the result.

### 5. Test logical AND with `false`

Create a variable using `false && "hello"` and log the result.

### 6. Test logical OR with empty string

Create a variable using `"" || "fallback"` and log the result.

### 7. Test logical OR with zero

Create a variable using `0 || 100` and log the result.

### 8. Test nullish coalescing with `undefined`

Create a variable using `undefined ?? "default value"` and log it.

### 9. Test nullish coalescing with `null`

Create a variable using `null ?? "default value"` and log it.

### 10. Compare OR and nullish with zero

Create two variables:

- `a = 0 || 50`
- `b = 0 ?? 50`

Log both and explain the difference in a comment.

### 11. Create a numbers array

Create an array with at least 10 numbers, including duplicates.

### 12. Sort numbers ascending

Create a new sorted array in ascending order without changing the original array.

### 13. Sort numbers descending

Create a new sorted array in descending order without changing the original array.

### 14. Check original array is unchanged

After sorting, log the original array and sorted arrays to confirm no mutation.

### 15. Keep unique values with `Set`

Create a `Set` from the sorted array and log it.

### 16. Convert `Set` back to array

Convert your unique values `Set` back into an array and log it.

### 17. Get first five items

Use `slice(0, 5)` to create a new array with the first 5 elements.

### 18. Get last three items

Use `slice()` to create a new array with the last 3 elements.

### 19. Build a reusable helper

Create a function `getUniqueSorted(numbers)` that returns unique numbers sorted ascending.

### 20. Full practice challenge

Create a function `analyzeNumbers(numbers)` that returns an object with:

- `ascending`
- `descending`
- `unique`
- `firstFive`

Log the returned object.
