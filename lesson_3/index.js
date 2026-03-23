// Arithmetic operators
// +
// -
// *
// /
// %
// **

// შედარების ოპერატორები

// >
// <
// ადარებს მხოოლოდ ცვლადის მნისვნელობებს
// ==
// ადარებს როგორც მნიშვნელობებს ისე ტიპებს
// ===
// >=
// <=
// !=
// !==

let num1 = 5;
let num2 = "5";

console.log(num1 == num2);
console.log(num1 === num2);

// if Cinditional

if (num1 == num2) {
  console.log("hello js");
}

let fName = "ni";

if (fName == "tevdore") {
  console.log("I am tevdore");
} else if (fName == "nikoloz") {
  console.log("I am nikoloz");
} else if (fName == "George") {
  console.log("I am George");
} else {
  console.log("I am robot");
}

let age1 = 12;
let age2 = 20;
// შეამოწმეთ ორი ცვლადი , თუ რომელიმე მეტია მაშინ
// კონსოლში დაბეჭდეთ " age1 მეტია" ან "age2 მეტია"
// თუ ერთმანეთის ტოლია "ცვლადები ერთმანეთის ტოლია"

if (age1 > age2) {
  console.log("age1 მეტია");
} else if (age2 > age1) {
  console.log("age2 მეტია");
} else {
  console.log("ცვლადები ერთმანეთია ტოლია");
}

// ასაკის კონტროლი წვეულებაზე შესვლისას
let customerAge = 20;

if (customerAge >= 18) {
  console.log("შეგიძლიათ შემობრძანდეთ");
} else {
  console.log("სამწუხაროდ ვერ შეგიშვებთ");
}

// თუ მომხმარებლის ასაკი ნაკლებია 18 წელზე სიგარეტს და
// ალკოჰოლს არ ვაძლევთ
// თუ ასაკი მეტია ან ტოლი 18 ის და ნაკლებია 22 ზე მაშინ
// სიგარეტს ვაძლევთ მაგრამ არ ვაძლევთ ალკოჰოლს,
// მაგრამ თუ ასაი მეტია ან ტოლი 22 ის მაშინ ვაძლევთ როგორც
// სიგარეტს ისე ალკოჰოლს

if (customerAge < 18) {
  console.log("სამწუხაროდ ვერ მიიღებთ სასმელს და სიგარტს");
} else if (customerAge > 22) {
  console.log("თქვენ შეგიძლიათ მიიღოთ სასმელი და სიგარეტი");
} else {
  console.log("თქვენ შეგიძლიათ მიიღოთ სიგარეტი მაგრამ ვერ მიიღებთ სასმელს");
}

// ლოგიკური ოპერატორები

// && (და) (and)
// || (ან) (or)
// ! (არა) (not)

let num = 12;

console.log(num > 10 && num < 20);
console.log(num > 10 || num > 20);

let day = "monday";
let weather = "rain";

if (day == "monday" && weather == "rain") {
  console.log("დღეს არ მივდივარ სამსახურში");
} else if (day == "monday" && weather != "rain") {
  console.log("დღს მივდივარ სამსახურში");
}

// პრომპტით შემოიტანეთ ციფრი და შეამოწმეთ
// თუ ეს ციფრი არის ლუწი კონსოლში დაბეჭდეთ რიცხვი ლუწია
// თუ ეს რიცხვი იქნება კენტი კონსოლში დაბეჭდეთ რიცხვი კენტია

// let test = +prompt("შემოიტანე ციფრი");

// if (test % 2 == 0) {
//   console.log("ეს რიცხვი ლუწია");
// } else {
//   console.log("ეს რიცხვი კენტია");
// }

// let guesNumber = 71;

// let myNum = +prompt("გამოიცანი ჩაფიქრებული რიცხვი");

// if (guesNumber < myNum) {
//   alert("შენი ჩაფიქრებული ციფრი მეტია");
// } else if (guesNumber > myNum) {
//   alert("შენი ჩაფიქრებული ციფრი ნაკლებია");
// } else {
//   alert("გილოცავ შენ გამოიცანი ჩაფიქრებული ციფრი");
// }

let lastName = "Khintibidze";

// .length გვიბრუნებს სტრინგის სიგრძეს
console.log(lastName.length);

// ტერნერი ოპერატორი
// {condition} ?  {result 1} : {result 2};
lastName == "Murusidze" ? console.log(true) : console.log(false);

// let num5 = +prompt("ჩაწერეთ ციფრი");

// num5 % 2 == 0 ? alert("ლუწია") : alert("კენტია");

let a = 40;
let b = 20;
let c = 1;

if (a > b && a > c) {
  console.log("a is greatest");
} else if (b > a && b > c) {
  console.log("b is greatest");
} else if (c > b && c > a) {
  console.log("c is greatest");
}

// let sumOfPrice = 200;

// თუ შეძენილი პროდუქციის ღირებულება მოთავსებულია 100 დან 150 ლარის შეუალედში , ფასდაკლება ექკუთვნის ღირებულების 10%
// თუ პროდუქციის ღირებულება არის 150 დან 200 ის შუალედში ეკუტვნის
// 15% ფასდაკლება
// თუ პროდუქციის ღირებულება არის 200 დან 300 ის შუალედში ეკუთვნის
// 20% ფასდაკლება
// თუ პროდუქციის ღიტებუება მეტია 300 ზე ეკუტვის 30% ფასდაკლება

// console.log("თქვენ გეკუტვნით 10% ფასდაკლება " + (150 / 100) * 10 + " ლარი");

let sumOfPrice = 320;
if (sumOfPrice >= 100 && sumOfPrice < 150) {
  console.log("გეკუტვნით 10% ფასდაკლება " + (sumOfPrice / 100) * 10 + " ლარი");
} else if (sumOfPrice >= 150 && sumOfPrice < 200) {
  console.log("გეკუტვნით 15% ფასდაკლება " + (sumOfPrice / 100) * 15 + " ლარი");
} else if (sumOfPrice >= 200 && sumOfPrice < 300) {
  console.log("გეკუტვნით 20% ფასდაკლება " + (sumOfPrice / 100) * 20 + " ლარი");
} else if (sumOfPrice >= 300) {
  console.log("გეკუტვნით 30% ფასდაკლება " + (sumOfPrice / 100) * 30 + " ლარი");
}

let dayOfWeek = "ხუთშაბათი";
