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
    const overlay = document.getElementById("menuOverlay");
    if (overlay) {
      if (!overlay.classList.contains("active")) {
        setTimeout(() => {
          overlay.classList.add("active");
          document.body.style.overflow = "hidden";
        }, 250); // tempo para animar o hambúrguer
      } else {
        overlay.classList.remove("active");
        document.body.style.overflow = "";
      }
    }
  });
}
// Overlay click closes menu
const menuOverlay = document.getElementById("menuOverlay");
if (menuOverlay) {
  menuOverlay.addEventListener("click", function () {
    // Só fecha se clicar fora do conteúdo
    if (e.target === menuOverlay) {
      menuOverlay.classList.remove("active");
      document.body.style.overflow = "";
      if (menuHamburger) menuHamburger.classList.remove("ativo");
    }
  });
  // Botão X fecha menu
  const closeBtn = document.getElementById("menuOverlayClose");
  if (closeBtn) {
    closeBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      menuOverlay.classList.remove("active");
      document.body.style.overflow = "";
      if (menuHamburger) menuHamburger.classList.remove("ativo");
    });
  }
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

// Featured Work interatividade
const featuredItems = document.querySelectorAll(".featured-item");
const featuredImage = document.querySelector(".featured-image img");
const images = [
  "./assets/investar.png",
  "./assets/inga.jpg",
  "./assets/sigma.jpg",
];

let activeIdx = 0;

function setActive(idx) {
  featuredItems.forEach((el, i) => {
    if (i === idx) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
  featuredImage.src = images[idx];
  activeIdx = idx;
}

featuredItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    setActive(idx);
  });
});

// Inicializa o primeiro como ativo
setActive(0);
