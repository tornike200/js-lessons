// Select DOM elements using tag, id, class, and multiple class matches.
const h2Element = document.querySelector("h2");
console.log(h2Element);

const h3Element = document.querySelector("#title2");
console.log(h3Element);

const para1Element = document.querySelector(".para1");
console.log(para1Element);

const paraElems = document.querySelectorAll(".para");

console.log(paraElems);

// Basic array indexing examples.
//               0        1         2
let fruits = ["ვაშლი", "ატამი", "ბანანი"];

console.log(fruits);

let numbers = [1, 4, 6, 2, 88, 2, 1.5];
console.log(numbers);

console.log(fruits[2]);

console.log(numbers[4]);

console.log(numbers[numbers.length - 1]);

// Update heading styles through JavaScript.
h2Element.style.color = "#fff";
h2Element.style.fontSize = "42px";
h2Element.style.padding = "10px";
h2Element.style.backgroundColor = "yellow";
h2Element.style.borderRadius = "8px";

// Style selected paragraph elements individually and with a loop.
console.log(paraElems[1]);
paraElems[0].style.color = "red";
paraElems[1].style.color = "green";

paraElems.forEach((elem) => {
  elem.style.color = "orange";
});

paraElems[0].style.color = "red";

h3Element.textContent = "test test";

// Toggle heading background color on each button click.
const btn = document.querySelector("#btn1");

let isClicked = false;
btn.addEventListener("click", () => {
  if (!isClicked) {
    h2Element.style.backgroundColor = "red";
    isClicked = true;
  } else {
    h2Element.style.backgroundColor = "yellow";
    isClicked = false;
  }
});
