// Abrir imagen en Modal al hacer clic
function openModal(element) {
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImage");
    const captionText = document.getElementById("modalCaption");

    // Obtener la etiqueta <img> dentro del contenedor clickeado
    const img = element.querySelector("img");

    modal.style.display = "flex";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
}

// Cerrar la ventana Modal
function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none";
}

// Cerrar también con la tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        closeModal();
    }
});