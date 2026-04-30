// const day = new Date();

// console.log(day.getDate());

// console.log(day.getHours());

// console.log(day.getMinutes());

// console.log(day.getSeconds());

// console.log(day.getMonth() + 1);

// console.log(day.getDay() + 1);

// console.log(
//   day.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "numeric",
//     day: "numeric",
//   }),
// );

const hoursElement = document.querySelector(".hours");
const minutesElement = document.querySelector(".minutes");
const secondsElement = document.querySelector(".seconds");

time();

setInterval(() => {
  time();
}, 1000);

function time() {
  const day = new Date();

  const hours = day.getHours();
  const minutes = day.getMinutes();
  const seconds = day.getSeconds();

  hoursElement.textContent = hours < 10 ? "0" + hours : hours;
  minutesElement.textContent = minutes < 10 ? "0" + minutes : minutes;
  secondsElement.textContent = seconds < 10 ? "0" + seconds : seconds;
}
