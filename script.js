// ==========================================
// NIXORA - JAVASCRIPT
// ==========================================


// AÑO AUTOMÁTICO
const year = document.getElementById("year");

if (year) {
    year.textContent = new Date().getFullYear();
}


// NAVBAR
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

});


// MENÚ MÓVIL
const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });


    // Cerrar menú al pulsar un enlace
    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });

    });

}


// ANIMACIONES AL HACER SCROLL
const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.12
    }
);


revealElements.forEach(element => {
    observer.observe(element);
});


// CERRAR MENÚ SI SE CAMBIA A ESCRITORIO
window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {
        navLinks.classList.remove("open");
    }

});


// EFECTO SUAVE PARA LOS ENLACES
document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function (event) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (!target) {
            return;
        }

        event.preventDefault();

        target.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


// EFECTO DE MOVIMIENTO MUY SUTIL EN LA TARJETA DEL HERO
const heroWindow = document.querySelector(".minecraft-window");

if (heroWindow && window.innerWidth > 760) {

    document.addEventListener("mousemove", (event) => {

        const x = (window.innerWidth / 2 - event.clientX) / 70;
        const y = (window.innerHeight / 2 - event.clientY) / 70;

        heroWindow.style.transform =
            `rotateY(${x}deg) rotateX(${y}deg)`;

    });

}
