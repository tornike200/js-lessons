# JavaScript Practice Tasks

## Dataset Topics

- Objects
- Arrays
- Destructuring
- Spread operator
- Rest operator
- `map()`
- `filter()`
- `find()`
- `reduce()`
- Nested objects
- Immutable updates

## Beginner Tasks

### 1. Get all book titles

Create an array that contains only book titles.

Expected result:

```js
["The Lord of the Rings", "The Cyberiad", "Dune"];
```

### 2. Get all authors

Create an array with all authors.

### 3. Find book by ID

Create a function `getBookTitleById(id)` and return only the title.

### 4. Find books with movie adaptations

Return only books where `hasMovieAdaptation === true`.

### 5. Get books with more than 500 pages

Use `filter()`.

### 6. Add new genre to Dune

Create a new object (do not mutate original) and add `"classic"` to `genres`.

Use the spread operator.

### 7. Destructure title and author

From the first book:

```js
const { title, author } = book;
```

Console log them.

### 8. Destructure genres

Get these variables using array destructuring:

- `primaryGenre`
- `secondaryGenre`
- `otherGenres`

### 9. Count total books

Return total number of books.

### 10. Get all fantasy books

Find books where `genres` includes `"fantasy"`.

## Medium Tasks

### 11. Create short book objects

Create a new array like this:

```js
[
  {
    title: "Dune",
    author: "Frank Herbert",
  },
];
```

Use `map()`.

### 12. Add `ebookAvailable` property

Create an updated `books` array where every book has:

```js
ebookAvailable: true;
```

Use the spread operator.

### 13. Get average Goodreads rating

Calculate average rating of all books.

Hint: `book.reviews.goodreads.rating`

Use `reduce()`.

### 14. Find book with most pages

Return the largest book.

### 15. Get books published after 1990

Use `publicationDate`.

### 16. Find books without translations

Return books where `translations` is empty.

Hint: `Object.keys(translations).length`

### 17. Get all unique genres

Create one array with no duplicates.

Example:

```js
["fantasy", "adventure", "novel"];
```

Hints:

- `flatMap()`
- `Set`

### 18. Add new translation

Add German translation to Dune without mutating the original object.

### 19. Get total pages of all books

Use `reduce()`.

### 20. Create summary strings

Create an array like:

```js
["Dune by Frank Herbert has 658 pages", "The Cyberiad by Stanislaw Lem has 295 pages"];
```

Use `map()`.

## Bonus Challenges

### Bonus 1

Sort books by pages (smallest to biggest).

### Bonus 2

Sort books by Goodreads rating.

### Bonus 3

Find the most reviewed book.

Use `reviews.goodreads.reviewsCount`.

### Bonus 4

Create search function:

```js
searchBooks("fantasy");
```

It should return matching books.

### Bonus 5

Group books by author.

Expected result:

```js
{
	"Frank Herbert": [...],
	"J. K. Rowling": [...]
}
```

## Real Skills You Practice

These tasks teach real-world JavaScript skills used in:

- React
- APIs
- Frontend interviews
- State management
- Data transformation
- Backend-related data handling
