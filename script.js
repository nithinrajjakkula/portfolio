// Smooth Scrolling for Navbar Links
document.querySelectorAll(".nav-links a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Sticky Navbar
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

// Mobile Menu Toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

mobileMenu.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
    navLinks.classList.toggle("active");
});

// Close Mobile Menu on Link Click
navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
        navLinks.classList.remove("active");
    });
});
// Dynamic Year in Footer
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;


window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollUpBar.style.display = "flex";
    } else {
        scrollUpBar.style.display = "none";
    }
});

scrollUpBar.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});


// Dark Mode Toggle
const darkModeToggle = document.querySelector(".dark-mode-toggle");
darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Scroll to Top Button
const scrollToTopButton = document.getElementById("scroll-to-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopButton.style.display = "block";
    } else {
        scrollToTopButton.style.display = "none";
    }
});

scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Project Modals
const projectCards = document.querySelectorAll(".project-card");
const modals = document.querySelectorAll(".modal");
const closeButtons = document.querySelectorAll(".close");

projectCards.forEach((card, index) => {
    card.addEventListener("click", () => {
        modals[index].style.display = "flex";
    });
});

closeButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        modals[index].style.display = "none";
    });
});

window.addEventListener("click", (e) => {
    modals.forEach((modal) => {
        if (e.target === modal) {
            modal.style.display = "none";
        }
    });
});

// Contact Form Submission
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const formData = new FormData(this);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = formData.get("message");

    // Simulate form submission (replace with actual API call)
    const submitButton = contactForm.querySelector(".btn");
    submitButton.classList.add("loading");

    setTimeout(() => {
        submitButton.classList.remove("loading");
        formStatus.textContent = `Thank you, ${name}! Your message has been sent.`;
        formStatus.style.color = "#4CAF50"; // Green color for success
        contactForm.reset();
    }, 2000);
});
// Custom Cursor
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

document.querySelectorAll("a, button, .project-card").forEach((element) => {
    element.addEventListener("mouseenter", () => {
        cursor.classList.add("hover");
    });
    element.addEventListener("mouseleave", () => {
        cursor.classList.remove("hover");
    });
});

// Animate Elements on Scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const isVisible = elementTop < window.innerHeight && elementBottom >= 0;
        if (isVisible) {
            element.classList.add("fadeIn");
        }
    });
};

window.addEventListener("scroll", animateOnScroll);
animateOnScroll(); // Trigger on page load

