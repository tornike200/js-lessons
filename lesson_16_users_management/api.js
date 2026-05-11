const URL = "http://localhost:3000/users";

// create new user
export async function createUser(user) {
  const response = await fetch(URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  });

  const result = await response.json();

  console.log(result);
}

// get all users
export async function getAllUsers() {
  const response = await fetch(URL, { method: "GET" });

  const data = await response.json();

  return data;
}
