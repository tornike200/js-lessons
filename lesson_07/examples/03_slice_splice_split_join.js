const numbers = [10, 20, 30, 40, 50];

const copy = numbers.slice(1, 4);
console.log("Slice copy:", copy);
console.log("Original after slice:", numbers);

const removed = numbers.splice(1, 2);
console.log("Removed with splice:", removed);
console.log("Original after splice:", numbers);

const word = "JavaScript";
const reversed = word.split("").reverse().join("");
console.log("Reversed:", reversed);
