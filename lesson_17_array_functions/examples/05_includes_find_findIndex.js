// includes(), find(), and findIndex() examples
const tags = ["javascript", "frontend", "array-methods"];

const hasFrontendTag = tags.includes("frontend");
console.log("Has frontend tag:", hasFrontendTag); // true

const users = [
  { id: 1, name: "Tornike", role: "student" },
  { id: 2, name: "Ana", role: "teacher" },
  { id: 3, name: "Giorgi", role: "student" },
];

const teacher = users.find((user) => user.role === "teacher");
console.log("Teacher:", teacher);

const firstStudentIndex = users.findIndex((user) => user.role === "student");
console.log("First student index:", firstStudentIndex); // 0
