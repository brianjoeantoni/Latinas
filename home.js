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

// modal 1
const openConfirmationButton = document.querySelector(
  "[data-open-confirmation-modal]"
);
const closeNoButton = document.querySelector("[data-no-close-modal]");
const closeYesButton = document.querySelector("[data-yes-close-modal]");
const modalConfirmation = document.querySelector("[data-confirmation-modal]");

openConfirmationButton.addEventListener("click", () => {
  modalConfirmation.showModal();
});

closeNoButton.addEventListener("click", () => {
  modalConfirmation.close();
});

closeYesButton.addEventListener("click", () => {
  modalConfirmation.close();
});
