# Lesson 9 - Solutions: Objects in JavaScript

## Suggested Solutions for In-Class Tasks

### 1.

```js
const student = {
  name: "Ana",
  age: 20,
  city: "Tbilisi",
};

console.log(student);
```

### 2.

```js
console.log(student.name);
```

### 3.

```js
console.log(student["city"]);
```

### 4.

```js
const keyName = "age";
console.log(student[keyName]);
```

### 5.

```js
student.age = 21;
console.log(student);
```

### 6.

```js
student.isActive = true;
```

### 7.

```js
student.hobby = "football";
```

### 8.

```js
delete student.isActive;
console.log(student);
```

### 9.

```js
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2020,
};

console.log(car.model);
```

### 10.

```js
car.year = 2024;
```

### 11.

```js
car.color = "white";
```

### 12.

```js
const book = {
  title: "Clean Code",
  author: "Robert C. Martin",
  pages: 464,
};

console.log(book.title);
console.log(book.author);
console.log(book.pages);
```

### 13.

```js
const user = {
  name: "Ana",
  address: {
    city: "Tbilisi",
    street: "Aghmashenebeli",
  },
};

console.log(user.address.city);
```

### 14.

```js
user.address.zipCode = "0102";
```

### 15.

```js
const person = {
  name: "Mia",
  greet: function () {
    console.log("Hello, I am " + this.name);
  },
};
```

### 16.

```js
person.greet();
```

### 17.

```js
for (let key in car) {
  console.log(key);
}
```

### 18.

```js
for (let key in book) {
  console.log(key, book[key]);
}
```

### 19.

```js
const course = {
  title: "JavaScript Basics",
  lessonCount: 9,
  teacher: "Nino",
  isOnline: false,
};

for (let key in course) {
  console.log(key, course[key]);
}
```

### 20.

```js
const profileSummary = {
  fullName: student.name + " Example",
  city: student.city,
  hasHobby: Boolean(student.hobby),
};

console.log(profileSummary);
```
