const grades = [52, 74, 89, 33, 95];

for (const grade of grades) {
  if (grade >= 90) {
    console.log(grade, "A");
  } else if (grade >= 70) {
    console.log(grade, "B");
  } else if (grade >= 50) {
    console.log(grade, "C");
  } else {
    console.log(grade, "F");
  }
}
