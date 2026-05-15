// Filter basics - extracting even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Returns a new array containing only even numbers
const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log("Even numbers:", evenNumbers); // [2, 4, 6, 8, 10]

// Filter with objects - finding admins
const users = [
  { name: "Tornike", isAdmin: true },
  { name: "Zaza", isAdmin: false },
  { name: "Mariam", isAdmin: true },
];

const admins = users.filter((user) => user.isAdmin);
console.log("Admins:", admins);
