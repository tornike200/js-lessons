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
