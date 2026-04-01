// for loop — the most common loop in JavaScript

// Basic for loop: count from 0 to 4
for (let i = 0; i < 5; i++) {
  console.log(i);
}

// Loop through an array using index
const fruits = ["apple", "banana", "orange", "grape"];

for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

// Count backwards
for (let i = fruits.length - 1; i >= 0; i--) {
  console.log(fruits[i]);
}
