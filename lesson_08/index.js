// ----------------------------------------
// for loop
// ----------------------------------------

const students = ["გიორგი", "მარია", "ვოვა", "მარიამი", "სანდრო"];

for (let i = 0; i < students.length; i++) {
  console.log(i, students[i]);
}

// ----------------------------------------
// for loop — find the largest number
// ----------------------------------------

const numbers = [76, 23, 0, 76, 654, 7, 88, 2, 54, 66];
let maxNum = numbers[0];

for (let i = 1; i < numbers.length; i++) {
  if (numbers[i] > maxNum) {
    maxNum = numbers[i];
  }
}

console.log("Largest:", maxNum);

// ----------------------------------------
// for loop — print only even numbers
// ----------------------------------------

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    console.log(numbers[i]);
  }
}

// ----------------------------------------
// while loop
// ----------------------------------------

let n = 0;

while (n < students.length) {
  console.log(students[n]);
  n++;
}

// ----------------------------------------
// do...while loop
// ----------------------------------------

let count = 0;

do {
  console.log("count:", count);
  count++;
} while (count < 3);

// ----------------------------------------
// for...of loop
// ----------------------------------------

for (let student of students) {
  console.log(student);
}

// for...of over a string
const word = "JavaScript";

for (let char of word) {
  console.log(char);
}

// ----------------------------------------
// for...in loop — object keys
// ----------------------------------------

const person = {
  name: "თორნიკე",
  age: 25,
  city: "თბილისი",
};

for (let key in person) {
  console.log(key, ":", person[key]);
}

// ----------------------------------------
// break and continue
// ----------------------------------------

// stop when we find a number over 100
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 100) {
    console.log("Found big number:", numbers[i]);
    break;
  }
}

// skip even numbers, print only odd
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) continue;
  console.log("Odd:", numbers[i]);
}

numbers.forEach((num) => {
  if (num % 2 == 0 && num !== 0) {
    doubledNumbers.push(num ** 2);
  }
});

console.log(doubledNumbers);
