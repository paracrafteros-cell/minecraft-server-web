// ========================================
// ParaCraft - JavaScript
// ========================================


// AÑO AUTOMÁTICO
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}


// MENÚ MÓVIL
const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {
    navigation.classList.toggle("open");
  });

}


// CERRAR MENÚ AL PULSAR UN ENLACE
document.querySelectorAll(".navigation a").forEach(link => {

  link.addEventListener("click", () => {

    navigation?.classList.remove("open");

  });

});


// NAVBAR AL HACER SCROLL
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if (!navbar) return;

  if (window.scrollY > 30) {

    navbar.classList.add("scrolled");

  } else {

    navbar.classList.remove("scrolled");

  }

});


// ANIMACIONES DE APARICIÓN
const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

  entries => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {

        entry.target.classList.add("visible");

        revealObserver.unobserve(entry.target);

      }

    });

  },

  {
    threshold: 0.12
  }

);


revealElements.forEach(element => {

  revealObserver.observe(element);

});


// CERRAR MENÚ SI SE REDIMENSIONA LA VENTANA
window.addEventListener("resize", () => {

  if (window.innerWidth > 760) {

    navigation?.classList.remove("open");

  }

});
});
