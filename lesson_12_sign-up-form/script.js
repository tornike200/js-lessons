const registerForm = document.querySelector("form");

console.log(registerForm);

registerForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  const name = document.querySelector("#name");
  const surname = document.querySelector("#surname");
  const email = document.querySelector("#email");
  const password = document.querySelector("#password");

  if (!name.value) {
    let message = "First Name cannot be empty";
    name.classList.add("red-border");
    name.previousElementSibling.classList.remove("hidden");
    name.removeAttribute("placeholder");
    name.nextElementSibling.textContent = message;
    isValid = false;
  } else {
    name.classList.remove("red-border");
    name.previousElementSibling.classList.add("hidden");
    name.nextElementSibling.textContent = "";
    isValid = true;
  }

  if (!surname.value) {
    let message = "Last Name cannot be empty";
    surname.classList.add("red-border");
    surname.previousElementSibling.classList.remove("hidden");
    surname.removeAttribute("placeholder");
    surname.nextElementSibling.textContent = message;
    isValid = false;
  } else {
    surname.classList.remove("red-border");
    surname.previousElementSibling.classList.add("hidden");
    surname.nextElementSibling.textContent = "";
    isValid = true;
  }

  if (!email.value) {
    let message = "Email cannot be empty";
    email.classList.add("red-border");
    email.previousElementSibling.classList.remove("hidden");
    email.removeAttribute("placeholder");
    email.nextElementSibling.textContent = message;
    isValid = false;
  } else if (email.value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/) == null) {
    email.value = "";
    let message = "Looks like this is not an email";
    email.classList.add("red-border");
    email.previousElementSibling.classList.remove("hidden");
    email.setAttribute("placeholder", "email@example/com");
    email.nextElementSibling.textContent = message;
    isValid = false;
  } else {
    email.classList.remove("red-border");
    email.previousElementSibling.classList.add("hidden");
    email.nextElementSibling.textContent = "";
    isValid = true;
  }

  if (!password.value) {
    let message = "Password cannot be empty";
    password.classList.add("red-border");
    password.previousElementSibling.classList.remove("hidden");
    password.removeAttribute("placeholder");
    password.nextElementSibling.textContent = message;
    isValid = false;
  } else {
    password.classList.remove("red-border");
    password.previousElementSibling.classList.add("hidden");
    password.nextElementSibling.textContent = "";
    isValid = true;
  }

  if (isValid) {
    const data = {
      name: name.value,
      surname: surname.value,
      email: email.value,
      password: password.value,
    };

    name.value = "";
    surname.value = "";
    email.value = "";
    password.value = "";

    console.log(data);
  }
});
