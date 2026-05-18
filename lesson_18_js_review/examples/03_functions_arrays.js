function toUsd(value) {
  return `$${value.toFixed(2)}`;
}

const prices = [12.99, 5.5, 40, 8.25, 120];

const cheapPrices = prices.filter((price) => price < 20);
const labels = cheapPrices.map((price) => toUsd(price));
const total = prices.reduce((sum, price) => sum + price, 0);

console.log("cheap:", cheapPrices);
console.log("labels:", labels);
console.log("total:", toUsd(total));
