// Map basics - transforming array elements
const numbers = [1, 2, 3, 4, 5];

// Returns a new array with each element doubled
const doubled = numbers.map((num) => num * 2);
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// Map with objects - extracting names
const users = [
  { id: 1, name: "Ana" },
  { id: 2, name: "Giorgi" },
  { id: 3, name: "Mariam" },
];

const names = users.map((user) => user.name);
console.log("Names:", names); // ["Ana", "Giorgi", "Mariam"]

// Transform words to uppercase
const words = ["hello", "world"];
const uppercase = words.map((word) => word.toUpperCase());
console.log("Uppercase:", uppercase); // ["HELLO", "WORLD"]
