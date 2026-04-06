# Lesson 9 - Teacher Notes: Objects in JavaScript

## Lesson Goal

Students should understand that objects are used to group related data with named properties,
and should be able to read, update, add, delete, and loop through those properties.

## Suggested Lesson Flow

1. Start by comparing an array and an object.
2. Show that arrays use indexes, while objects use named keys.
3. Create a simple `student` object live in class.
4. Read values with dot notation and bracket notation.
5. Update one property and add a new one.
6. Show `delete` on a property.
7. Introduce a nested object.
8. Add a simple method and explain `this`.
9. Finish with `for...in` and a small summary object.

## Core Teaching Points

- An object is best when values need names, not positions.
- Keys are usually strings.
- Bracket notation is required for dynamic keys.
- `this` inside an object method refers to that object when the method is called from it.
- `for...in` gives keys, not values directly.

## Common Mistakes

- Using dot notation with a variable name instead of bracket notation.
- Forgetting quotes around string values.
- Confusing arrays and objects.
- Writing `user.keyName` when they really mean `user[keyName]`.
- Forgetting that nested values need full access paths like `user.address.city`.

## Live Coding Ideas

- Build a `book` object with title, author, and year.
- Add `isAvailable` and update it.
- Create a nested `publisher` object.
- Add a `describe` method.
- Print all keys and values with `for...in`.

## Quick Check Questions

1. When should we use an object instead of an array?
2. What is the difference between dot notation and bracket notation?
3. How do we add a new property?
4. How do we delete a property?
5. What does `this` mean inside an object method?
