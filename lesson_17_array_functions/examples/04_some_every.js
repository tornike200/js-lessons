// some() and every() examples
const scores = [45, 66, 80, 91];

// some(): true if at least one element matches the condition
const hasExcellent = scores.some((score) => score >= 90);
console.log("Has excellent score:", hasExcellent); // true

// every(): true only if all elements match the condition
const allPassed = scores.every((score) => score >= 50);
console.log("All passed:", allPassed); // false

const users = [
  { name: "Ana", isActive: true },
  { name: "Nika", isActive: true },
  { name: "Mariam", isActive: false },
];

const hasInactiveUser = users.some((user) => !user.isActive);
console.log("Has inactive user:", hasInactiveUser); // true

const allActive = users.every((user) => user.isActive);
console.log("All active:", allActive); // false
