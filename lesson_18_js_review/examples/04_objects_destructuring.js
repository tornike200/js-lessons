const user = {
  id: 1,
  name: "Mariam",
  role: "student",
  contact: {
    email: "mariam@example.com",
    city: "Tbilisi",
  },
  intro() {
    return `${this.name} (${this.role})`;
  },
};

const {
  name,
  contact: { email },
} = user;

console.log(user.intro());
console.log(name, email);
