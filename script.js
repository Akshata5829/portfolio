// Initialize particles.js
particlesJS("particles-js", {
    particles: {
        number: {
            value: 120,
            density: {
                enable: true,
                value_area: 1000,
            },
        },
        color: { value: "#ffffff" },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
        },
        opacity: {
            value: 0.7,
            random: true,
            anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.3,
                sync: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: true,
                speed: 2,
                size_min: 0.5,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "repulse",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
        },
        modes: {
            repulse: {
                distance: 100,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
        },
    },
    retina_detect: true,
});

// Smooth scroll for navigation links
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');

    navLinks.forEach((link) => {
        const targetSection = document.querySelector(link.getAttribute("href"));

        if (targetSection) {
            link.addEventListener("click", (e) => {
                e.preventDefault(); // Prevent default anchor behavior
                targetSection.style.display = "block"; // Ensure section is visible
                targetSection.scrollIntoView({ behavior: "smooth" }); // Smooth scroll to the section
            });
        }
    });
});
