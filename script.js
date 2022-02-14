const simpleModal = document.querySelector("#simple-modal");
const simpleModalButton = document.querySelector("#btn-simple-modal");
const listModal = document.querySelector("#list-modal");
const listModalButton = document.querySelector("#btn-list-modal");
const confirmModal = document.querySelector("#confirm-modal");
const confirmModalButton = document.querySelector("#btn-confirm-modal");
const closeBtn = document.querySelector("#modal__close");

simpleModalButton.addEventListener("click",() => (simpleModal.style.display = "flex"));
listModalButton.addEventListener("click",() => (listModal.style.display = "flex"));
confirmModalButton.addEventListener("click",() => (confirmModal.style.display = "flex"));
closeBtn.addEventListener("click", () => (simpleModal.style.display = "none"));

// Responsible for closing the modal by clicking anywhere else on the window
window.addEventListener("click", (event) => {
  if (event.target === simpleModal) {
    simpleModal.style.display = "none";
  } else if (event.target === listModal) {
    listModal.style.display = "none";
  } else if (event.target === confirmModal) {
    confirmModal.style.display = "none";
  }
});
