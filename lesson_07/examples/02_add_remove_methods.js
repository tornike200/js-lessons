const cities = ["Tbilisi", "Kutaisi", "Batumi"];

cities.push("Rustavi");
cities.unshift("Gori");
console.log("After add:", cities);

cities.pop();
cities.shift();
console.log("After remove:", cities);
