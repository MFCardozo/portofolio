/*toggle nav mobile*/
const hamburguer = document.querySelector(".nav-toggle");
const links = document.querySelectorAll(".nav__list");
hamburguer.addEventListener("click", () => {
  document.body.classList.toggle("nav-open");
});
links.forEach((click) => {
  click.addEventListener("click", () => document.body.classList.remove("nav-open")
  );
});
