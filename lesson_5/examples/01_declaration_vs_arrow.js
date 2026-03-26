// Example 1 - Standard Function vs Arrow Function
// All three versions do the same thing

// --- Standard function declaration ---
function addStandard(a, b) {
  return a + b;
}
console.log("Standard:", addStandard(3, 4)); // 7

// --- Function expression ---
const addExpression = function (a, b) {
  return a + b;
};
console.log("Expression:", addExpression(3, 4)); // 7

// --- Arrow function ---
const addArrow = (a, b) => {
  return a + b;
};
console.log("Arrow:", addArrow(3, 4)); // 7

// --- Arrow function with implicit return (shortest form) ---
const addImplicit = (a, b) => a + b;
console.log("Implicit:", addImplicit(3, 4)); // 7
