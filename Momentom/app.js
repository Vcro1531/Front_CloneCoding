const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");

const link = document.querySelector("a");

function onLoginSubmit(event) {
  const username = loginInput.value;
  console.log(username);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.log(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
