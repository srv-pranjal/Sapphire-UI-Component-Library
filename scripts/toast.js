const leftAlignedToast = document.querySelector("#toast--left");
const leftAlignedToastButton = document.querySelector("#btn-toast--left");
const rightAlignedToast = document.querySelector("#toast--right");
const rightAlignedToastButton = document.querySelector("#btn-toast--right");
const sampleToast = document.querySelector("#toast--demo");
const toastDemoButton = document.querySelector("#btn-toast--demo");
const closeBtn = document.querySelector(".toast__btn-close");

leftAlignedToastButton.addEventListener("click", () => {
  setTimeout(() => (leftAlignedToast.style.display = "none"), 2000);
  leftAlignedToast.style.display = "flex";
});
rightAlignedToastButton.addEventListener("click", () => {
  setTimeout(() => (rightAlignedToast.style.display = "none"), 2000);
  rightAlignedToast.style.display = "flex";
});
toastDemoButton.addEventListener("click", () => {
  setTimeout(() => (sampleToast.style.display = "none"), 5000);
  sampleToast.style.display = "flex";
});
closeBtn.addEventListener("click", () => (sampleToast.style.display = "none"));
