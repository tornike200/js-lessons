const API_URL = "http://localhost:3000/users";

async function getUsers() {
  const response = await fetch(API_URL);
  const users = await response.json();
  console.log(users);
}

async function getUserById(id) {
  const response = await fetch(`${API_URL}/${id}`);
  const user = await response.json();
  console.log(user);
}

// getUsers();
// getUserById(1);
