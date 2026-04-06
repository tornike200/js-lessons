# Lesson 9 - Student Notes: Objects in JavaScript

## What is an Object?

An object stores related information using `key: value` pairs.

```js
const user = {
  name: "Ana",
  age: 21,
  city: "Tbilisi",
};
```

In this example:

- `name`, `age`, and `city` are keys
- `"Ana"`, `21`, and `"Tbilisi"` are values

---

## 1. Read Object Properties

You can read object values in two ways.

### Dot notation

```js
console.log(user.name);
```

### Bracket notation

```js
console.log(user["age"]);
```

Use bracket notation when the key comes from a variable.

```js
const keyName = "city";
console.log(user[keyName]);
```

---

## 2. Update a Property

```js
user.age = 22;
console.log(user.age);
```

---

## 3. Add a New Property

```js
user.country = "Georgia";
console.log(user);
```

---

## 4. Delete a Property

```js
delete user.city;
console.log(user);
```

---

## 5. Nested Objects

An object can contain another object.

```js
const student = {
  name: "Luka",
  contact: {
    phone: "599123456",
    city: "Kutaisi",
  },
};

console.log(student.contact.city);
```

---

## 6. Methods in Objects

A method is a function stored inside an object.

```js
const person = {
  name: "Mia",
  greet: function () {
    console.log("Hello, I am " + this.name);
  },
};

person.greet();
```

`this` refers to the current object.

---

## 7. Loop Through Object Keys

Use `for...in` to loop through an object's keys.

```js
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
};

for (let key in car) {
  console.log(key, car[key]);
}
```

---

## Key Points to Remember

- Objects group related data together.
- Dot notation is simple for fixed keys.
- Bracket notation is useful for dynamic keys.
- Objects can be changed after creation.
- Objects can contain nested objects and functions.
- `for...in` loops through object keys.
