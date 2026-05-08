const URL = "http://localhost:3000/users";

export async function getAllUsers() {
  const response = await fetch(URL, { method: "GET" });

  const data = await response.json();

  return data;
}

export async function getUserById(id) {
  const response = await fetch(`${URL}/${id}`, { method: "GET" });

  const data = await response.json();

  return data;
}

export async function createUser(user) {
  const respose = await fetch(URL, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(user),
  });

  const data = await respose.json();
  return data;
}
