const API_URL = "http://localhost:3000/users";

async function createUser(user) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  console.log("Created:", data);
}

async function updateUser(id, user) {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });

  const data = await response.json();
  console.log("Updated:", data);
}

// createUser({ userId: "10", userName: "ana", email: "ana@mail.com" });
// updateUser(10, { userId: "10", userName: "ana update", email: "ana.update@mail.com" });
