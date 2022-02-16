const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".section");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});

/*document.querySelector(".links").addEventListener("click", () => {
  container.classList.toggle("active");
});*/


