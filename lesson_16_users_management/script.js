import { createUser, getAllUsers, deleteUser } from "./api.js";

document.querySelector("#userForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  const surname = document.querySelector("#surname").value;
  const email = document.querySelector("#email").value;
  const userId = document.querySelector("#userId").value;

  if (!name || !surname || !email || !userId) return alert("გთხოვთ შეავსოთ ყველა ველი !!!");

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

async function renderUSers() {
  const users = await getAllUsers();

  const usersString = users
    .map((user) => {
      return `  
    
        <tr>
          <td>${user.name}</td>
          <td>${user.surname}</td>
          <td>${user.email}</td>
          <td>${user.userId}</td>
          <td>
          <button id="${user.id}" class="deleteBtn">delete</button> 
          <button id="${user.id}" class="editBtn">edit</button> 
          </td>
        </tr>
    
    `;
    })
    .join("");

  document.querySelector("tbody").innerHTML = usersString;
}

renderUSers();

document.querySelector("table").addEventListener("click", (e) => {
  if (e.target.classList.contains("deleteBtn")) {
    confirm("ნამდვილად გსურთ იუზერის წაშლა ?") && deleteUser(e.target.id);
  }

  if (e.target.classList.contains("editBtn")) {
    window.localStorage.setItem("id", e.target.id);
    window.location = "./edit.html";
  }
});
