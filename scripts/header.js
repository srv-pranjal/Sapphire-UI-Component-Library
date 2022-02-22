const sidebar = document.querySelector(".sidebar");
const burgerButton = document.querySelector(".header__hamburger");
const menuButton = document.querySelector(".header__menu");

const handleMobileNav = () => {
  if (sidebar.style.display === "none" || sidebar.style.display === "") {
    sidebar.style.display = "block";
    menuButton.classList.replace("fa-bars", "fa-times");
  } else {
    sidebar.style.display = "none";
    menuButton.classList.replace("fa-times", "fa-bars");
  }
};

burgerButton.addEventListener("click", handleMobileNav);
