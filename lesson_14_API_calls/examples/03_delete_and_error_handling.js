const API_URL = "http://localhost:3000/users";

async function deleteUser(id) {
  try {
    const response = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
    const data = await response.json();
    console.log("Deleted:", data);
  } catch (error) {
    console.error("Delete request failed:", error.message);
  }
}

async function safeGetUsers() {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const users = await response.json();
    console.log(users);
  } catch (error) {
    console.error("GET request failed:", error.message);
  }
}

// safeGetUsers();
// deleteUser(1);
