// Example 3 - Click event with toggle logic

const heading = document.querySelector("h2");
const button = document.querySelector("#btn1");

let isClicked = false;

button.addEventListener("click", () => {
  if (!isClicked) {
    heading.style.backgroundColor = "red";
    heading.style.color = "white";
    isClicked = true;
  } else {
    heading.style.backgroundColor = "yellow";
    heading.style.color = "#333";
    isClicked = false;
  }
});
