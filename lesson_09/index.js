// ----------------------------------------
// object basics
// ----------------------------------------

const student = {
  name: "ნიკა",
  surname: "ციხელიშვილი",
  age: 18,
  isActive: true,
};

console.log("Full student object:", student);
console.log("Name:", student.name);
console.log("Surname:", student["surname"]);

// ----------------------------------------
// update, add, delete
// ----------------------------------------

student.age = 19;
student.city = "თბილისი";
delete student.isActive;

console.log("Updated student:", student);

const dynamicKey = "age";
console.log("Dynamic key access:", student[dynamicKey]);

// ----------------------------------------
// nested objects and methods
// ----------------------------------------

const user = {
  name: "ანა",
  surname: "ბერიძე",
  age: 21,
  address: {
    city: "ბათუმი",
    district: "ბონი",
  },
  greet: function () {
    console.log("გამარჯობა, მე ვარ " + this.name);
  },
};

user.greet();
console.log("User city:", user.address.city);

// ----------------------------------------
// looping through object keys
// ----------------------------------------

for (let key in user) {
  console.log(key, user[key]);
}

// ----------------------------------------
// object used for grouped data
// ----------------------------------------

const course = {
  title: "JavaScript Basics",
  lessonNumber: 9,
  topic: "Objects",
  studentsCount: 12,
};

console.log("Course summary:", course);
