# Lesson 14 - Student Notes: API Calls in JavaScript

## What is an API?

An API is a way for programs to talk to each other.
In front-end development, we usually send HTTP requests to a server and get data back.

---

## 1. HTTP Methods

- `GET` -> read data
- `POST` -> create new data
- `PUT` -> replace existing data
- `DELETE` -> remove data

---

## 2. Basic `fetch()`

```js
fetch("http://localhost:3000/users")
  .then((response) => response.json())
  .then((data) => console.log(data));
```

`response.json()` converts JSON text into a JavaScript object/array.

---

## 3. `async` / `await`

`async/await` is a cleaner way to write asynchronous code.

```js
async function getUsers() {
  const response = await fetch("http://localhost:3000/users");
  const data = await response.json();
  console.log(data);
}
```

---

## 4. Send Data with `POST`

When creating data, send JSON in the request body.

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

## 5. Update Data with `PUT`

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

## 6. Delete Data with `DELETE`

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

## 7. JSON Server Quick Start

1. Install once:

```bash
npm install -g json-server
```

2. Run in lesson folder:

```bash
json-server --watch db.json
```

3. API base URL:

```text
http://localhost:3000
```
