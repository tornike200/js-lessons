// https://www.w3schools.com/js/js_syntax.asp
// https://www.w3schools.com/js/js_statements.asp
// https://www.w3schools.com/js/js_variables.asp
// https://www.w3schools.com/js/js_let.asp
// https://www.w3schools.com/js/js_const.asp
// https://www.w3schools.com/js/js_types.asp

// ცვლადის შექმის 3 გზა
// let
// const
// var

let age = 12;
let name = "Tevdore";
let isStudent = true;
let notExists = null;
let notDefined = undefined;

//           0  1  2  3 ...
let array = [1, 3, 4, 5, 6, 7, "zaza", true, [2, 3, 4, 5], { age: 12 }];

//            key     value
let user = {
  name: "giorgi",
  surname: "zaridze",
  myFunc: function () {
    console.log("hi");
  },
};

console.log(typeof age);
console.log(typeof name);
console.log(typeof isStudent);
console.log(typeof notExists);
console.log(typeof notDefined);

console.log(array[6]);
console.log(user.surname);
user.myFunc();

// let test1 = 2;
// let test2 = test1;
// test2 = 12;

// console.log(test1);
// console.log(test2);

// const user1 = {
//   name: "marika",
// };

// const user2 = user1;

// user2.name = "nugzari";

// console.log(user1);
// console.log(user2);

// https://www.w3schools.com/js/js_operators.asp

// +, -, =, *, /, %, **, ++, --

// > , < , ==, ===, !, !=, !==, >=, <=

// =, +=, -=, *=, /=, **=

console.log(12 == "12");
console.log(12 === "12");

// let age1 = 12;
// let age2 = "12";

// console.log(age1 !== age2);

let num = 12;
// num **= 2;

console.log(Math.sqrt(num));
// console.log(num);

// https://www.w3schools.com/js/js_if.asp
let isGirl = true;

if (isGirl) {
  console.log("hi i am a girl");
}

let num1 = 20;
let num2 = 90;

if (num1 > num2) {
  console.log("num1 is greater than num2");
} else if (num1 < num2) {
  console.log("num2 is greater than num1");
} else {
  console.log("num1 equals num2");
}

// https://www.w3schools.com/js/js_if_ternary.asp
let name1 = "tina";
let name2 = "nina";

console.log(name1 == name2 ? "equals" : "not equals");

// https://www.w3schools.com/js/js_loops.asp
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("################################");

let n = 0;

while (n < 10) {
  console.log(n);

  n++;
}

// https://www.w3schools.com/js/js_function_intro.asp
function sumOfTwoNum(param1, param2) {
  return param1 + param2;
}

let result = sumOfTwoNum(2, 5);

console.log("result is " + result);

// const sum = (num1, num2) => {
//   return num1 + num2;
// };

// let result2 = sum(20, 7);
// console.log(result2);

const sum = (num1, num2) => num1 + num2;

let result2 = sum(20, 7);

console.log(result2);

//              0         1       2       3...     4
let names = ["giorgi", "ilia", "dachi", "nana", "tamari"];

console.log(names[3]);
console.log(names.length);

names.push("mzia");
names.unshift("aleko");

let lasIndex = names.length - 1;
console.log(names[lasIndex]);
console.log(names[0]);

// https://www.w3schools.com/js/js_strings.asp
//          01234
let city = "tbilisi";
let regioni = " iMeReti ";

console.log(city.length);

console.log(city[0]);

console.log(city.split("").reverse().join(""));

console.log(city.toUpperCase());

console.log(regioni + " " + city);
console.log(`${regioni} ${city}`);
console.log(regioni.concat(" ", city));

console.log(city.slice(1, 4));
console.log(city.substring(1, 4));

console.log(regioni.length);
regioni = regioni.trim().toLowerCase();
console.log(regioni.length);
console.log(regioni);

console.log(city.indexOf("i"));
console.log(city.lastIndexOf("i"));

console.log(city.includes("o"));

let count = 0;
for (let i = 0; i < city.length; i++) {
  if (city[i] == "i") count++;
}

console.log(count);

console.log(city.startsWith("tb"));
console.log(city.endsWith("uh"));

const user1 = {
  name: "emzari",
  surname: "managadze",

  greet: function () {
    console.log(`hi i am ${this.name}`);
  },
};

console.log(user1.name);
console.log(user1["surname"]);
user1.email = "test@gmail.com";

console.log(user1);

user1.greet();

const users = ["gia", "nodari", "tamila", "tina", "temuri"];

for (let name of users) {
  console.log(name);
}

for (let key in user1) {
  console.log(key);
}

const uppercase = [];

users.forEach((user) => {
  uppercase.push(user.toUpperCase());
});

const updatedUSers = users.map((user) => {
  return user.toUpperCase();
});

console.log(uppercase);
console.log(updatedUSers);

const filteredUsers = users.filter((user) => {
  return user.startsWith("t");
});

console.log(filteredUsers);

const wantedUser = users.find((user) => {
  return user.includes("g");
});

console.log(wantedUser);

const API_URL = "https://jsonplaceholder.typicode.com/posts";

// fetch(API_URL, { method: "GET" })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

async function getPosts() {
  const respose = await fetch(API_URL, { method: "GET" });

  const data = await respose.json();

  console.log(data);
}

getPosts();

async function getPostById(id) {
  const response = await fetch(API_URL + "/" + id, { method: "GET" });

  const data = await response.json();

  console.log(data);
}

getPostById(1);

const newPost = {
  userId: 102,
  title: "new post",
  body: "this is a new post body",
};

async function createNewPost(post) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(post),
  });

  const result = await response.json();
  console.log(result);
}

createNewPost(newPost);

async function updatePostById(id, post) {
  const response = await fetch(API_URL + "/" + id, {
    method: "PUT",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(post),
  });

  const result = await response.json();

  console.log(result);
}

updatePostById(1, newPost);

async function deleteUSerById(id) {
  const response = await fetch(API_URL + "/" + id, { method: "DELETE" });

  const result = await response.json();

  console.log(result);
}

deleteUSerById(1);

 