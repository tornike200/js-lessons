// Chaining array methods example
const products = [
  { title: "Keyboard", price: 120, inStock: true },
  { title: "Mouse", price: 60, inStock: false },
  { title: "Monitor", price: 450, inStock: true },
  { title: "USB Cable", price: 20, inStock: true },
];

// 1) Keep only products in stock
// 2) Extract prices
// 3) Sum all prices
const totalInStockPrice = products
  .filter((product) => product.inStock)
  .map((product) => product.price)
  .reduce((total, price) => total + price, 0);

console.log("Total in-stock price:", totalInStockPrice); // 590
