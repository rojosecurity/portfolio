// Navegación entre vistas principales (SPA)
function navigateTo(templateId) {
    // 1. Ocultar todas las secciones
    const templates = document.querySelectorAll('.template');
    templates.forEach(template => {
        template.classList.remove('active');
    });

    // 2. Mostrar la sección elegida
    const targetTemplate = document.getElementById(templateId);
    if (targetTemplate) {
        targetTemplate.classList.add('active');
    }

    // 3. Actualizar la clase "active" en el Menú de Navegación
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('onclick').includes(templateId)) {
            link.classList.add('active');
        }
    });
}

// Navegación de Tabs en la plantilla "Acerca de"
function switchTab(tabId) {
    // Ocultar todos los contenidos de las tabs
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.classList.remove('active');
    });

    // Quitar la clase active de los botones de las tabs
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });

    // Activar el contenido y el botón seleccionado
    document.getElementById(tabId).classList.add('active');
    
    // Activar el botón correspondiente
    event.currentTarget.classList.add('active');
}

// Funcionalidad de Búsqueda en la Tabla de Recursos
function filterTable() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const table = document.getElementById('resourcesTable');
    const rows = table.getElementsByTagName('tr');

    // Recorrer las filas de la tabla (omitir el encabezado index 0)
    for (let i = 1; i < rows.length; i++) {
        let rowText = rows[i].textContent || rows[i].innerText;
        
        if (rowText.toLowerCase().indexOf(filter) > -1) {
            rows[i].style.display = "";
        } else {
            rows[i].style.display = "none";
        }
    }
}