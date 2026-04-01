// while loop — runs as long as the condition is true

let count = 0;

while (count < 5) {
  console.log("count:", count);
  count++;
}

// while loop through an array
const colors = ["red", "green", "blue", "yellow"];
let i = 0;

while (i < colors.length) {
  console.log(colors[i]);
  i++;
}

// do...while — always runs at least once, then checks the condition
let n = 0;

do {
  console.log("n is:", n);
  n++;
} while (n < 3);
