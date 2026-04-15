// Example 3: modal open/close and responsive click behavior

const showBtn = document.querySelector(".showBtn");
const closeBtn = document.querySelector("#close");
const modal = document.querySelector(".modal");
const btn = document.querySelector("#btn1");

showBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
});

btn.addEventListener("click", () => {
  const width = window.innerWidth;
  console.log("Current width:", width);

  if (width <= 768) {
    btn.textContent = "Mobile Click";
    btn.style.backgroundColor = "green";
  } else {
    btn.textContent = "Desktop Click";
    btn.style.backgroundColor = "red";
  }

  btn.style.color = "white";
});
