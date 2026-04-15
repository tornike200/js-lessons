// Example 2: classList add/remove/toggle

const para2 = document.querySelector(".para2");
const title = document.querySelector("#title");

para2.classList.add("testClass");

setTimeout(() => {
  para2.classList.remove("testClass");
}, 1000);

setInterval(() => {
  title.classList.toggle("hidden");
}, 1500);
