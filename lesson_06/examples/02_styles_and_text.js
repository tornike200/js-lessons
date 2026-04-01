// Example 2 - Changing text and styles

const heading = document.querySelector("h2");
const subHeading = document.querySelector("#title2");
const paragraphs = document.querySelectorAll(".para");

heading.textContent = "DOM Manipulation Basics";
subHeading.textContent = "JavaScript can update this page";

heading.style.color = "white";
heading.style.backgroundColor = "teal";
heading.style.padding = "10px";
heading.style.borderRadius = "8px";

paragraphs.forEach((paragraph) => {
  paragraph.style.color = "orange";
});
