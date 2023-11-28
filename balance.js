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

// active class -------------------------------------------------------------------------------------
// Get all buttons with class="btn"
var btns = document.getElementsByClassName("btn");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");

    // If there's no active class
    if (current.length > 0) {
      current[0].className = current[0].className.replace(" active", "");
    }

    // Add the active class to the current/clicked button
    this.className += " active";
  });
}
