// for...of — loop over array values directly

const students = ["Ana", "Luka", "Mia", "Nika"];

for (let student of students) {
  console.log(student);
}

// for...of with a string — iterates over characters
const word = "hello";

for (let char of word) {
  console.log(char);
}

// for...in — loop over object keys
const person = {
  name: "Giorgi",
  age: 25,
  city: "Tbilisi",
};

for (let key in person) {
  console.log(key, ":", person[key]);
}
