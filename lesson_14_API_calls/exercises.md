# Lesson 14 - Exercises: API Calls in JavaScript

Practice exercises with examples before doing class tasks.

---

## Exercise 1 - Simple GET Request

```js
async function getUsers() {
  const response = await fetch("http://localhost:3000/users");
  const data = await response.json();
  console.log(data);
}
```

---

## Exercise 2 - GET User by ID

```js
async function getUserById(id) {
  const response = await fetch(`http://localhost:3000/users/${id}`);
  const data = await response.json();
  console.log(data);
}
```

---

## Exercise 3 - POST New User

```js
async function createUser(user) {
  const response = await fetch("http://localhost:3000/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  console.log(data);
}
```

---

## Exercise 4 - PUT Update User

```js
async function updateUser(id, user) {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  console.log(data);
}
```

---

## Exercise 5 - DELETE User

```js
async function deleteUser(id) {
  const response = await fetch(`http://localhost:3000/users/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  console.log(data);
}
```

---

## Exercise 6 - Show Names Only

```js
async function printUserNames() {
  const response = await fetch("http://localhost:3000/users");
  const users = await response.json();

  users.forEach((user) => console.log(user.userName));
}
```
