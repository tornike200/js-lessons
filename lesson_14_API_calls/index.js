const API_URL = "http://localhost:3000/users";

// GET all users
async function getUsers() {
  const response = await fetch(API_URL, { method: "GET" });
  const data = await response.json();
  console.log("All users:", data);
}

// GET one user by id
async function getUserById(id) {
  const response = await fetch(`${API_URL}/${id}`, { method: "GET" });
  const data = await response.json();
  console.log("User by id:", data);
}

// POST create new user
async function createUser(user) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  console.log("Created user:", data);
}

// PUT replace user data
async function updateUser(user, id) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  console.log("Updated user:", data);
}

// DELETE user by id
async function deleteUser(id) {
  const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
  const data = await response.json();
  console.log("Deleted user:", data);
}

// Demo calls (uncomment one block at a time during class)
// getUsers();
// getUserById(2);

// createUser({ userId: "3", userName: "nana", email: "nana@gmail.com" });

// updateUser({ userId: "3", userName: "mzia", email: "mzia@gmail.com" }, 3);

// deleteUser(1);
