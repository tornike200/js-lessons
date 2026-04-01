// Indexing           0         1        2        3         4 ...
const students = ["გიორგი", "მარია", "ვოვა", "მარიამი", "სანდრო", "თევდორე", "ანდრეი"];

// Check the array length
console.log(students.length);

// Name at index 3
console.log(students[3]);

// Add a new name to the end of the array
students.push("თორნიკე");
console.log(students);

// Add a new name to the start of the array
students.unshift("ნიკოლოზი");
console.log(students);

// Remove a name from the end of the array
students.pop();
console.log(students);

// Remove a name from the start of the array
students.shift();
console.log(students);

// Replace a name at a specific index
students[0] = "ერიკ";
console.log(students);

// Reverse the array
students.reverse();
console.log(students);

// Sort the array alphabetically
students.sort();
console.log(students);

// Delete a value at a specific index
// delete students[0];
// console.log(students);

// Clear the array
// students.length = 0;
// console.log(students);

// Copy names into a new array (does not modify the original), using start and end indexes
let newStudents = students.slice(0, 3);
console.log(newStudents);
console.log(students);

// Cut names from the array (modifies the original), using start index and delete count
let newStudents2 = students.splice(0, 2);
console.log(newStudents2);
console.log(students);

// Convert a string to an array by splitting it into characters
let userName = "თევდორე";
let userNameArray = userName.split("");
console.log(userNameArray);

// Reverse the array
userNameArray.reverse();
console.log(userNameArray);

// Join array elements back into a string
let finalName = userNameArray.join("");
console.log(finalName);
