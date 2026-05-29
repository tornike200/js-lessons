const user = {
  name: "Tornike",
  surname: "kapanadze",
};

function greet({ name, surname }) {
  console.log(`hi i am ${name} ${surname}`);
}

greet(user);

// ლოგიკური and
let result = true && "test";
let result2 = false && "test2";

console.log(result);
console.log(result2);

// ლოგიკური or
let result3 = "" || "test";
let result4 = 0 || "test3";

console.log(result3);
console.log(result4);

// nulish
let result5 = undefined ?? "test4";
let result6 = null ?? "test5";

let result7 = 0 ?? "test6";

console.log(result5);
console.log(result6);
console.log(result7);

let numbers = [2, 5, 3, 6, 1, 8, 9, 3, 4, 6];

// ზრდადობით დალაგება
let sortedAray = numbers.slice().sort((a, b) => a - b);

console.log(sortedAray);
console.log(numbers);

// უნიკალური ციფრების დატოვება
let unicNumbers = new Set(sortedAray);

// console.log(unicNumbers);

// კლებადობით დალაგება
const descendingArray = numbers.slice().sort((a, b) => b - a);

console.log(descendingArray);

const clonedArray = new Set([...numbers].sort((a, b) => a - b));

console.log(clonedArray);

const slicedArray = numbers.slice(0, 5);
console.log(slicedArray);