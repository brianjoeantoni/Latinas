const togglePassword = document.getElementById("togglePassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");

togglePassword.addEventListener("click", function (e) {
  // toggle type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";

  password.setAttribute("type", type);
});

// toggle eye icon Login
function changeImageLogin() {
  if (togglePassword.getAttribute("src") === "assets/Login/visible.png") {
    togglePassword.setAttribute("src", "assets/Login/hide.png");
  } else {
    togglePassword.setAttribute("src", "assets/Login/visible.png");
  }
}

toggleConfirmPassword.addEventListener("click", function (e) {
  // toggle type attribute
  const type2 =
    confirmPassword.getAttribute("type") === "password" ? "text" : "password";

  confirmPassword.setAttribute("type", type2);
});

function changeImageLogin2() {
  if (
    toggleConfirmPassword.getAttribute("src") === "assets/Login/visible.png"
  ) {
    toggleConfirmPassword.setAttribute("src", "assets/Login/hide.png");
  } else {
    toggleConfirmPassword.setAttribute("src", "assets/Login/visible.png");
  }
}
