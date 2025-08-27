// Sticky header
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("bg-dark", window.scrollY > 50);
});

// Hamburger menu animation
const menuHamburger = document.getElementById("menuHamburger");
if (menuHamburger) {
  menuHamburger.addEventListener("click", function () {
    this.classList.toggle("ativo");
  });
}

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Back to top button (bonus)
const btnTop = document.createElement("button");
btnTop.innerText = "↑";
btnTop.classList.add("btn-top");
document.body.appendChild(btnTop);

btnTop.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnTop.classList.add("visible");
  } else {
    btnTop.classList.remove("visible");
  }
});
