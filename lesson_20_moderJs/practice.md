# Lesson 20 Practice Tasks

Use the same `data` array from this lesson to solve the tasks below. Do not mutate the original array unless the task explicitly says so.

## Beginner Tasks

### 1. Get all book titles

Create an array with only the book titles.

### 2. Get all authors

Create an array with only the authors.

### 3. Get books with movie adaptations

Return only the books where `hasMovieAdaptation` is `true`.

### 4. Get books with no movie adaptations

Return only the books where `hasMovieAdaptation` is `false`.

### 5. Get books with fewer than 500 pages

Use `filter()`.

### 6. Find a book by ID

Create a function `getBookById(id)` that returns the matching book.

### 7. Find a book by title

Create a function `getBookByTitle(title)` that returns the matching book.

### 8. Count the total number of books

Return the length of the array.

### 9. Destructure title and author

Take the first book and extract `title` and `author` into separate variables.

### 10. Destructure genres

From the first book, create these variables:

- `firstGenre`
- `secondGenre`
- `remainingGenres`

## Medium Tasks

### 11. Create short book objects

Create a new array of objects with only `id`, `title`, and `pages`.

### 12. Add a new property to every book

Create a new array where every book has `availableInClass: true`.

### 13. Add a new genre to Dune

Create a new version of Dune with `classic` added to the `genres` array.

Do not mutate the original object.

### 14. Find the book with the most pages

Return the single book that has the biggest `pages` value.

### 15. Find the book with the highest Goodreads rating

Use `reviews.goodreads.rating`.

### 16. Get all fantasy books

Return books whose `genres` include `fantasy`.

### 17. Get all books published after 1995

Use `publicationDate`.

### 18. Count total pages

Add up the `pages` of every book.

### 19. Create summary strings

Create an array like this:

```js
["Dune by Frank Herbert has 658 pages"];
```

Use `map()`.

### 20. Create a search function

Create a function `searchBooks(query)` that returns all books whose title or genre matches the query.

## Bonus Practice

If you finish early, try these:

- Get all unique genres.
- Count how many books have translations.
- Create a grouped object by author.
