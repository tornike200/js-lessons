// Example 1 - Selecting DOM elements

const heading = document.querySelector("h2");
console.log("h2:", heading);

const subHeading = document.querySelector("#title2");
console.log("#title2:", subHeading);

const firstParagraph = document.querySelector(".para1");
console.log(".para1:", firstParagraph);

const allParagraphs = document.querySelectorAll(".para");
console.log(".para NodeList:", allParagraphs);
