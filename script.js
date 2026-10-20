
/* ---------- MOBILE NAVIGATION ---------- */
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
    );
});

navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
    });
});

/* ---------- DARK / LIGHT THEME ---------- */
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {
    const isLight = document.body.classList.toggle("light-theme");

    themeToggle.textContent = isLight ? "☾" : "☼";
    themeToggle.setAttribute(
        "aria-label",
        isLight ? "Switch to dark theme" : "Switch to light theme"
    );
});

/* ---------- SCROLL REVEAL ---------- */
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries, currentObserver) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                currentObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12
    });

    revealElements.forEach(function (element) {
        observer.observe(element);
    });
} else {
    revealElements.forEach(function (element) {
        element.classList.add("visible");
    });
}

/* ---------- CONTACT FORM ---------- */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("messageInput").value.trim();

    if (!name || !email || !message) {
        formStatus.textContent = "Please complete all fields.";
        formStatus.style.color = "#ef7777";
        return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        formStatus.textContent = "Please enter a valid email address.";
        formStatus.style.color = "#ef7777";
        return;
    }

    formStatus.textContent =
        "Thanks, " + name + "! Your details passed validation. " +
        "Please note: this demo does not send email yet.";
    formStatus.style.color = "#53d6a1";

    contactForm.reset();
});

/* ---------- FOOTER YEAR ---------- */
document.getElementById("year").textContent = new Date().getFullYear();