// Reduce basics - combining values into a single result
const numbers = [1, 2, 3, 4, 5];

// Sum all numbers
const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log("Sum:", sum); // 15

// Multiply all numbers
const product = numbers.reduce((acc, num) => acc * num, 1);
console.log("Product:", product); // 120

// Count items with a property
const users = [
  { name: "Ana", age: 25 },
  { name: "Giorgi", age: 17 },
  { name: "Mariam", age: 28 },
];

const adults = users.reduce((count, user) => {
  return user.age >= 18 ? count + 1 : count;
}, 0);
console.log("Adults count:", adults); // 2

// Group users by age
const grouped = users.reduce((acc, user) => {
  const ageGroup = user.age >= 18 ? "adult" : "minor";
  if (!acc[ageGroup]) {
    acc[ageGroup] = [];
  }
  acc[ageGroup].push(user.name);
  return acc;
}, {});
console.log("Grouped:", grouped);
