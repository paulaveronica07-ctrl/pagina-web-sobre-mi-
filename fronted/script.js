document.addEventListener("DOMContentLoaded", () => {
    // 1. Menú hamburguesa responsive
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {
        menuToggle.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        // Cerrar menú al hacer clic en un enlace
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    // 2. Validación de formulario en tiempo real
    const contactForm = document.getElementById("contactForm");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const mensajeInput = document.getElementById("mensaje");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();

            if (nombreInput.value.trim() === "" || emailInput.value.trim() === "" || mensajeInput.value.trim() === "") {
                formMessage.style.color = "red";
                formMessage.textContent = "Por favor, completa todos los campos.";
                return;
            }

            if (!emailInput.value.includes("@") || !emailInput.value.includes(".")) {
                formMessage.style.color = "red";
                formMessage.textContent = "Por favor, introduce un correo electrónico válido.";
                return;
            }

            // Si todo está correcto
            formMessage.style.color = "green";
            formMessage.textContent = "¡Mensaje enviado con éxito! Gracias por contactarme.";
            
            // Limpiar formulario
            contactForm.reset();

            // Limpiar mensaje después de 4 segundos
            setTimeout(() => {
                formMessage.textContent = "";
            }, 4000);
        });
    }

    const heroSection = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg-animated');

    if (heroSection && heroBg) {
        heroSection.addEventListener('mousemove', (e) => {
            const { width, height } = heroSection.getBoundingClientRect();
            const { clientX, clientY } = e;
            const { left, top } = heroSection.getBoundingClientRect();

            const mouseX = clientX - left;
            const mouseY = clientY - top;

            const moveX = (mouseX / width - 0.5) * 40; 
            const moveY = (mouseY / height - 0.5) * 40; 

            heroBg.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    }
});