// get element by tag name
const elementByTagName = document.getElementsByTagName("p");

console.log(elementByTagName);

//get element by id
const elementById = document.getElementById("para1");

console.log(elementById);

// get elemnt by classname
const elementByclassname = document.getElementsByClassName("para2");

console.log(elementByclassname);

// get element with querySelector
const elementByQuerySelector = document.querySelector("#para1");
console.log(elementByQuerySelector);

const elementByQueryselectorClass = document.querySelector(".para2");
console.log(elementByQueryselectorClass);

// get elements with querySelectorAll
const elementsQuerySelectorAll = document.querySelectorAll("p");
console.log(elementsQuerySelectorAll);

// change html
elementByQuerySelector.innerHTML = "New Text";

// change text content
elementByQueryselectorClass.textContent = "This is a new text for para 2";

// change style
elementByQuerySelector.style.fontSize = "32px";
elementByQuerySelector.style.color = "yellow";

// add class
elementByQueryselectorClass.classList.add("testClass");

// remove class
const classRemoveElement = document.querySelector(".testClass2");

classRemoveElement.classList.remove("testClass2");

// register events
const btnElement = document.querySelector("#btn1");

btnElement.addEventListener("click", () => {
  btnElement.style.backgroundColor = "red";
  btnElement.style.color = "white";
});

const hideAndShowBtn = document.querySelector("#hideAndShowBtn");
const titleElement = document.querySelector("#title");

hideAndShowBtn.addEventListener("click", () => {
  titleElement.classList.toggle("hidden");
});

const showBtn = document.querySelector(".showBtn");
const modalElement = document.querySelector(".modal");
const closeElement = document.querySelector("#close");

showBtn.addEventListener("click", () => {
  modalElement.classList.remove("hidden");
});

closeElement.addEventListener("click", () => {
  modalElement.classList.add("hidden");
});
