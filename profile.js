// toggle balance
const balanceEye = document.getElementById("balance-eye");
const balance = document.getElementById("member-balance");

// toggle eye icon Home
function changeImageHome() {
  if (balanceEye.getAttribute("src") === "../assets/Login/visible.png") {
    balanceEye.setAttribute("src", "/assets/Login/hide.png");
  } else {
    balanceEye.setAttribute("src", "../assets/Login/visible.png");
  }
}
function hideBalance() {
  if (balance.innerHTML != "******") {
    balance.innerHTML = "******";
  } else {
    //change balance data
    balance.innerHTML = "100.000";
  }
}
