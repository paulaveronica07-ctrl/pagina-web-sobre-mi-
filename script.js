document.addEventListener("DOMContentLoaded", () => {
    // 1. Menú hamburguesa responsive
    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en un enlace
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
        });
    });

    // 2. Validación de formulario en tiempo real
    const contactForm = document.getElementById("contactForm");
    const nombreInput = document.getElementById("nombre");
    const emailInput = document.getElementById("email");
    const mensajeInput = document.getElementById("mensaje");
    const formMessage = document.getElementById("formMessage");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // Validaciones básicas de campos vacíos o email inválido
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
});