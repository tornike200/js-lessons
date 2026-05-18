const KEY = "lesson18-users";

async function loadUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users?_limit=3");

    if (!response.ok) {
      throw new Error("Request failed");
    }

    const users = await response.json();
    localStorage.setItem(KEY, JSON.stringify(users));
    console.log(
      "saved users:",
      users.map((user) => user.name),
    );
  } catch (error) {
    console.error(error.message);
  }
}

function readSavedUsers() {
  const raw = localStorage.getItem(KEY);
  if (!raw) return;

  const users = JSON.parse(raw);
  console.log(
    "loaded from storage:",
    users.map((user) => user.name),
  );
}

loadUsers();
readSavedUsers();
