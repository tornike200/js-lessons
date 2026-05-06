# JSON Server Guide (Step by Step)

This guide explains:

- what JSON Server is
- how to install it
- how to start it
- how to use it in this project

---

## 1. What is JSON Server?

JSON Server is a small tool that turns a JSON file (like `db.json`) into a fake REST API.

It is very useful for front-end learning because you can practice real API requests (`GET`, `POST`, `PUT`, `DELETE`) without building a backend.

For this lesson, `db.json` is your database file and JSON Server gives you endpoints like:

- `http://localhost:3000/users`
- `http://localhost:3000/users/1`

---

## 2. Prerequisites

Before using JSON Server, make sure Node.js is installed.

Check versions in terminal:

```bash
node -v
npm -v
```

If these commands do not work, install Node.js first:

- https://nodejs.org/

---

## 3. Install JSON Server

You have two options.

### Option A: Global install (easy for lessons)

```bash
npm install -g json-server
```

Then verify:

```bash
json-server --version
```

### Option B: Local install (project-based)

Run this inside `lesson_14_API_calls`:

```bash
npm init -y
npm install json-server --save-dev
```

Then run with:

```bash
npx json-server --watch db.json
```

---

## 4. Project Setup (This Lesson)

In this project folder, you already have `db.json`.

Example structure:

```json
{
  "users": [{ "id": 1, "userName": "ana", "email": "ana@mail.com" }]
}
```

`users` becomes a collection endpoint:

- `GET /users`
- `GET /users/:id`
- `POST /users`
- `PUT /users/:id`
- `DELETE /users/:id`

---

## 5. Start JSON Server (Step by Step)

1. Open terminal.
2. Go to lesson folder:

```bash
cd lesson_14_API_calls
```

3. Start server:

```bash
json-server --watch db.json
```

If you used local install:

```bash
npx json-server --watch db.json
```

4. You should see a message with URL, usually:

- `http://localhost:3000`

5. Keep this terminal running while you test API calls.

---

## 6. Test Endpoints Quickly

Open these URLs in browser:

- `http://localhost:3000/users`
- `http://localhost:3000/users/1`

You can also test with your lesson code in `index.js`.

---

## 7. Use JSON Server in JavaScript Project

In this lesson, your API base URL is:

```js
const API_URL = "http://localhost:3000/users";
```

Example requests:

### GET all users

```js
const response = await fetch(API_URL);
const users = await response.json();
```

### POST new user

```js
await fetch(API_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ userName: "nino", email: "nino@mail.com" }),
});
```

### PUT update user

```js
await fetch(`${API_URL}/1`, {
  method: "PUT",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ id: 1, userName: "nino update", email: "nino2@mail.com" }),
});
```

### DELETE user

```js
await fetch(`${API_URL}/1`, { method: "DELETE" });
```

---

## 8. Common Errors and Fixes

### Error: `json-server` is not recognized

Reason: global package is not installed or PATH is not updated.

Fix:

1. Run `npm install -g json-server`
2. Close and reopen terminal
3. Run `json-server --version`

Or use local run:

```bash
npx json-server --watch db.json
```

### Error: Port 3000 already in use

Use another port:

```bash
json-server --watch db.json --port 3001
```

Then update API URL in code:

```js
const API_URL = "http://localhost:3001/users";
```

### Error: Cannot find `db.json`

Reason: command is run from wrong folder.

Fix:

- `cd` into `lesson_14_API_calls`
- then run the server command again

---

## 9. Classroom Workflow Recommendation

1. Start JSON Server first.
2. Run `getUsers()`.
3. Create one user (`POST`).
4. Read by id (`GET /:id`).
5. Update that user (`PUT`).
6. Delete that user (`DELETE`).
7. Read all users again to confirm final state.

This gives a full CRUD demo in one lesson.
