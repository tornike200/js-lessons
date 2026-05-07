const URL = "http://localhost:3000/users";

async function getAllUsers() {
  const response = await fetch(URL, { method: "GET" });

  const data = await response.json();

  console.log(data);
}

getAllUsers();

async function getUserById(id) {
  const response = await fetch(`${URL}/${id}`, { method: "GET" });

  const data = await response.json();

  console.log(data);
}

// getUserById(2);

async function createUser(user) {
  const respose = await fetch(URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  });
}

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
