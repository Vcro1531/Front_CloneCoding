const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginBtnClick() {
  console.log(loginInput.value);
  console.log("click");
}

loginButton.addEventListener("click", handleLoginBtnClick);
