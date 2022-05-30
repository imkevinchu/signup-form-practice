let password = document.getElementById("password"),
  password_confirm = document.getElementById("password_confirm");

const validatePassword = () => {
  if (password.value != password_confirm.value) {
    password_confirm.setCustomValidity("Passwords don't match");
    password.style.borderColor = "red";
    password_confirm.style.borderColor = "red";
  } else {
    password_confirm.setCustomValidity("");
    password.style.borderColor = "lightgray";
    password_confirm.style.borderColor = "lightgray";
  }
};

password.onchange = validatePassword;
password_confirm.onkeyup = validatePassword;
