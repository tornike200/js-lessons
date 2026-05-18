const heading = document.querySelector("#title");
const list = document.querySelector("#taskList");
const button = document.querySelector("#reviewBtn");

let count = 0;

button.addEventListener("click", () => {
  count += 1;

  const item = document.createElement("li");
  item.textContent = `DOM Task ${count}`;
  list.append(item);

  heading.textContent = `JavaScript Review Playground (${count})`;
});
