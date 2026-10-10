
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("#nav");

// Mobile navigation menu
menuToggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

// Close menu after clicking a navigation link
document.querySelectorAll("#nav a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// Reveal elements while scrolling
const elements = document.querySelectorAll(
    ".section-label, h2, .about-grid, .card, .evidence, " +
    ".log-entry, .reflection-box, .film-card"
);

elements.forEach((element) => {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    elements.forEach((element) => observer.observe(element));
} else {
    elements.forEach((element) => {
        element.classList.add("visible");
    });
}