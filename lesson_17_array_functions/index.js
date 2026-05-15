const numbers = [1, 2, 44, 3, 55, 67, 28];

// filter() ფუნცქია გამოიყენება მასივში არსებული ელემენტების გასაფილტრად,
// ის აბრუნებს ჩვენთვის სასურველ ელემენტებს და ამატებს ახალ მასივში
const evens = numbers.filter((number) => {
  if (number % 2 == 0) return number;
});

console.log(evens);

const users = [
  {
    name: "Tornike",
    isAdmin: true,
  },
  {
    name: "Zaza",
    isAdmin: false,
  },
  {
    name: "Mariam",
    isAdmin: true,
  },
  {
    name: "Mzia",
    isAdmin: false,
  },
];

// ფილტრაციის მაგალითი ობიექტების შემთხვევაში
const admins = users.filter((user) => {
  if (user.isAdmin) return user;
});

console.log(admins);

const numbers2 = [2, 3, 4, 5];
// map() ფუნქცია გამოიყენება მასივში არსებული ელემენტების გადასაკეთებლად,
// ციფრების მასივში არსებულ ციფრებს ვაორმაგებთ (ვამრავლებთ 2 ზე ) გაორმაგებულ ელემენტს ვაბრუნებთ და ვინახავთ ახალ მასივში
const doubledNumbers = numbers2.map((number) => {
  return number * 2;
});

console.log(doubledNumbers);

// მასივში არსებული ელემენტების გადაკეთების მაგილითი ობიექტების შემთხვევაში
// მასივში არსებული ობიექტებიდან ვამოწმებთ რომელია სახელად Zaza და მისი ადმინის სტატუსს ვცვლით
const updatedUsers = users.map((user) => {
  if (user.name == "Zaza") {
    user.isAdmin = true;
    return user;
  }

  return user;
});

console.log(updatedUsers);

const numbers3 = [3, 6, 8];
let sum = 0;

numbers3.forEach((num) => {
  sum = sum + num;
});

console.log(sum);

let sum2 = numbers3.reduce((acc, num) => acc + num, 0);

console.log(sum2);

let adminCount = updatedUsers.reduce((acc, user) => {
  if (user.isAdmin) acc++;

  return acc;
}, 0);

console.log(adminCount);

const wantedUser = users.find((user) => user.name == "Mzia");

console.log(wantedUser);

const testScores = [40, 72, 55, 90];
const hasHighScore = testScores.some((score) => score > 85);

console.log(hasHighScore);

const ages = [19, 25, 31, 18];
const allAdults = ages.every((age) => age >= 18);

console.log(allAdults);

const cities = ["Tbilisi", "Batumi", "Kutaisi"];
const hasBatumi = cities.includes("Batumi");

console.log(hasBatumi);

const numbers4 = [12, 15, 8, 20, 3];
const firstSmallIndex = numbers4.findIndex((num) => num < 10);

console.log(firstSmallIndex);

const chainedResult = numbers4
  .filter((num) => num > 10)
  .map((num) => num * 2)
  .reduce((acc, num) => acc + num, 0);

console.log(chainedResult);
