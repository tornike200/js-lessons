// კონსოლში ტექსტის გამოტანა
console.log("Hello, JavaScript");

// alert / confirm / prompt მაგალითები
// alert("I am Robot"); // აჩვენებს შეტყობინებას
// confirm("Are you Student?"); // აბრუნებს true ან false
// prompt("How old are you?"); // მომხმარებლისგან ინფორმაციის მიღება

// ცვლადები (Variables)

// let - მნიშვნელობა შეიძლება შეიცვალოს
let firstName = "Tamar";
console.log(firstName);

// მნიშვნელობის შეცვლა
firstName = "Giorgi";
console.log(firstName);

// რიცხვითი ცვლადი
let age = 32;
console.log(age);

// var - ძველი ტიპი (სასურველია არ გამოვიყენოთ)
var lastName = "Grigolia";

// const - მუდმივი ცვლადი (ვერ შევცვლით)
const id = "60001128233";
// id = "33345656"; // შეცდომა

// მონაცემთა ტიპები (Data Types)
let year = 2026;
console.log(typeof year); // number

let studentName = "Tevdore";
console.log(typeof studentName); // string

let isStudent = true;
console.log(typeof isStudent); // boolean
console.log(isStudent);

// მათემატიკური ოპერაციები
console.log(12 + 3); // მიმატება
console.log(321 - 1); // გამოკლება
console.log(7 * 8); // გამრავლება
console.log(30 / 5); // გაყოფა
console.log(11 % 2); // ნაშთი
console.log(2 ** 3); // ხარისხი

// სტრინგების გაერთიანება
let userName = "name";
let userSurname = "surname";

// space დამატებულია სწორად
let fullName = userName + " " + userSurname;
console.log(fullName);

// prompt() - მომხმარებლისგან მონაცემის მიღება
let sName = prompt("ჩაწერეთ თქვენი სახელი:");
console.log(sName);

// ასაკის მიღება
let sAge = prompt("ჩაწერეთ თქვენი ასაკი");

// string -> number გარდაქმნა
let numberAge = Number(sAge);
console.log(numberAge);

// ორი რიცხვის შეყვანა და მათი ჯამი
let num1 = prompt("შეიყვანეთ პირველი რიცხვი:");
let num2 = prompt("შეიყვანეთ მეორე რიცხვი:");

// prompt აბრუნებს string-ს, ამიტომ ვიყენებთ Number()
let sum = Number(num1) + Number(num2);

console.log("ჯამი არის: " + sum);
