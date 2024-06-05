const loginForm = document.querySelector("#login-form");

const loginInput = loginForm.querySelector("input");

const greeting = document.querySelector("#greeting");

function onLoginSubmit(event) {
  event.preventDefault();
  localStorage.setItem("username", loginInput.value);
  loginForm.classList.add("hidden");
  paintHello();
}

function paintHello() {
  const savedUsername = localStorage.getItem("username");
  greeting.classList.remove("hidden");
  greeting.innerText = `Hello! ${savedUsername}`;
}

const savedUsername = localStorage.getItem("username");

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintHello();
}
