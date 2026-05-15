// sort(), slice(), and splice() examples
const numbers = [12, 3, 25, 8, 19, 1];

// sort numbers in ascending order
const ascending = [...numbers].sort((a, b) => a - b);
console.log("Ascending:", ascending); // [1, 3, 8, 12, 19, 25]

// sort numbers in descending order
const descending = [...numbers].sort((a, b) => b - a);
console.log("Descending:", descending); // [25, 19, 12, 8, 3, 1]

// slice returns a copied part (does not modify original)
const part = numbers.slice(1, 4);
console.log("Slice 1..4:", part); // [3, 25, 8]
console.log("Original after slice:", numbers); // unchanged

// splice modifies original array
const editable = [...numbers];
editable.splice(2, 2, 100, 200);
console.log("After splice:", editable); // [12, 3, 100, 200, 19, 1]
