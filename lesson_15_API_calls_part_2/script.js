import { createUser, getAllUsers, deleteUser } from "./api.js";

// create new user
document.querySelector("#registration").addEventListener("submit", (e) => {
  e.preventDefault();

  let nameElement = document.querySelector("#name");
  let surnameElement = document.querySelector("#surname");
  let emailElement = document.querySelector("#email");

  let name = nameElement.value;
  let surname = surnameElement.value;
  let email = emailElement.value;

  if (!name || !surname || !email) {
    alert("all fileds are requirerd !!!");
    return;
  }

  const user = {
    name: name,
    surname: surname,
    email: email,
    id: crypto.randomUUID(),
  };

  createUser(user);

  e.target.reset();
});

async function renderUsers() {
  const users = await getAllUsers();

  const finalString = users
    .map((user) => {
      return `
       <div class="card">
        <h2><span>name:</span> ${user.name}</h2>
        <h2><span>surname:</span> ${user.surname}</h2>
        <h2><span>email:</span> ${user.email}</h2>
        <button class="deleteBtn" id="${user.id}"> delete user </button>
      </div>
    `;
    })
    .join("");

  document.querySelector(".container").innerHTML = finalString;
}

renderUsers();

const containerElem = document.querySelector(".container");

containerElem.addEventListener("click", (e) => {
  const button = e.target.classList.contains("deleteBtn");

  if (button) {
    const confirmed = confirm("are you sure you want to delete this user ?");

    if (confirmed) {
      const id = e.target.id;
      deleteUser(id);
    }
  }
});
