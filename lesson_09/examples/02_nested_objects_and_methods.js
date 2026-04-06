const user = {
  name: "Luka",
  address: {
    city: "Kutaisi",
    street: "Rustaveli",
  },
  greet: function () {
    console.log("Hello, I am " + this.name);
  },
};

console.log(user.address.city);
user.greet();
