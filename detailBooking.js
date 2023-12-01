//modal 1
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
