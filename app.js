const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

/* whenever you click on burger, do the code in parantheses */
burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open"); /* open or close navigation menu */
  burger.classList.toggle("toggle"); /* animate burger */
});

links.forEach((link) => {
  /* whichever link we click on, do something*/
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open"); /* close navigation menu */
    burger.classList.toggle("toggle"); /* change burger color back to dark */
  });
});
