# Lesson 9 - Exercises: Objects in JavaScript

Practice exercises with examples before doing the class tasks.

---

## Exercise 1 - Create an Object

```js
const user = {
  name: "Ana",
  age: 22,
  city: "Tbilisi",
};

console.log(user);
```

---

## Exercise 2 - Read with Dot Notation

```js
const car = {
  brand: "Honda",
  model: "Civic",
};

console.log(car.brand);
```

---

## Exercise 3 - Read with Bracket Notation

```js
const car = {
  brand: "Honda",
  model: "Civic",
};

console.log(car["model"]);
```

---

## Exercise 4 - Dynamic Key Access

```js
const user = {
  name: "Luka",
  age: 19,
};

const keyName = "age";
console.log(user[keyName]);
```

---

## Exercise 5 - Update a Property

```js
const product = {
  title: "Mouse",
  price: 40,
};

product.price = 45;
console.log(product);
```

---

## Exercise 6 - Add a New Property

```js
const student = {
  name: "Mia",
  grade: "A",
};

student.city = "Kutaisi";
console.log(student);
```

---

## Exercise 7 - Delete a Property

```js
const account = {
  username: "mia_01",
  password: "123456",
  active: true,
};

delete account.password;
console.log(account);
```

---

## Exercise 8 - Nested Object

```js
const user = {
  name: "Nino",
  address: {
    city: "Rustavi",
    street: "Shota Rustaveli",
  },
};

console.log(user.address.street);
```

---

## Exercise 9 - Object Method

```js
const person = {
  name: "Giorgi",
  greet: function () {
    console.log("Hello, I am " + this.name);
  },
};

person.greet();
```

---

## Exercise 10 - `for...in` Loop

```js
const phone = {
  brand: "Apple",
  model: "iPhone 14",
  color: "Black",
};

for (let key in phone) {
  console.log(key, phone[key]);
}
```
