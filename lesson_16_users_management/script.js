import { createUser } from "./api.js";

document.querySelector("#userForm").addEventListener("submit", (e) => {
  const name = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value;
  const email = document.querySelector("#email").value;
  const userId = document.querySelector("#userId").value;

  const newUser = {
    id: crypto.randomUUID(),
    name,
    surname,
    email,
    userId,
  };

  createUser(newUser);

  e.target.reset();
});




