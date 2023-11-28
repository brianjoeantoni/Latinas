const togglePassword = document.getElementById("togglePassword");
const password = document.getElementById("password");

togglePassword.addEventListener("click", function (e) {
  // toggle type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";

  password.setAttribute("type", type);
});
// toggle eye icon Login
function changeImageLogin() {
  if (togglePassword.getAttribute("src") === "../assets/Login/visible.png") {
    togglePassword.setAttribute("src", "/assets/Login/hide.png");
  } else {
    togglePassword.setAttribute("src", "../assets/Login/visible.png");
  }
}
