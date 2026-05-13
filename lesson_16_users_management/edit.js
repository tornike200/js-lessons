import { editUser, getUserById } from "./api.js";

const id = window.localStorage.getItem("id");

async function displayUserInfo() {
  const user = await getUserById(id);

  document.querySelector("#name").value = user.name;
  document.querySelector("#surname").value = user.surname;
  document.querySelector("#email").value = user.email;
  document.querySelector("#userId").value = user.userId;
}

displayUserInfo();

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value;
  const email = document.querySelector("#email").value;
  const userId = document.querySelector("#userId").value;

  const updatedUSer = {
    name,
    surname,
    email,
    userId,
  };

  editUser(updatedUSer, id);

  window.location = "./index.html";
});
