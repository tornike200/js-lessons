const titleElement = document.querySelector("#title");
const reviewButton = document.querySelector("#reviewBtn");
const loadUsersButton = document.querySelector("#loadUsersBtn");
const taskCountElement = document.querySelector("#taskCount");
const taskListElement = document.querySelector("#taskList");
const usersOutputElement = document.querySelector("#usersOutput");

const STORAGE_KEY = "lesson18-tasks";

let taskCounter = 0;
let isAccent = false;

function loadTasksFromStorage() {
  const rawTasks = localStorage.getItem(STORAGE_KEY);
  if (!rawTasks) return [];

  try {
    const parsed = JSON.parse(rawTasks);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    console.error("Failed to parse saved tasks:", error);
    return [];
  }
}

function saveTasksToStorage(tasks) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

let tasks = loadTasksFromStorage();

function renderTasks() {
  taskListElement.innerHTML = "";

  tasks.forEach((taskText) => {
    const listItem = document.createElement("li");
    listItem.textContent = taskText;
    taskListElement.append(listItem);
  });

  taskCounter = tasks.length;
  taskCountElement.textContent = `Tasks: ${taskCounter}`;
}

reviewButton.addEventListener("click", () => {
  isAccent = !isAccent;
  titleElement.style.color = isAccent ? "#0f766e" : "#1f2937";

  const newTask = `Review Task ${taskCounter + 1}`;
  tasks.push(newTask);
  saveTasksToStorage(tasks);
  renderTasks();
});

loadUsersButton.addEventListener("click", async () => {
  usersOutputElement.textContent = "Users: loading...";

  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Unable to load users");
    }

    const users = await response.json();
    const firstThreeNames = users.slice(0, 3).map((user) => user.name);
    usersOutputElement.textContent = `Users: ${firstThreeNames.join(", ")}`;
  } catch (error) {
    usersOutputElement.textContent = `Users: error (${error.message})`;
  }
});

renderTasks();
