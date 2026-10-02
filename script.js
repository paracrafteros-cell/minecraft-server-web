const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("open");
});

document.querySelectorAll("#nav a").forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  navbar.style.background = window.scrollY > 40
    ? "rgba(7,8,12,.94)"
    : "rgba(7,8,12,.78)";
});

document.getElementById("year").textContent = new Date().getFullYear();
