const menuButton = document.getElementById("menu-button");
const navLinks = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
  menuButton.classList.toggle("active");
  navLinks.classList.toggle("show");
});
