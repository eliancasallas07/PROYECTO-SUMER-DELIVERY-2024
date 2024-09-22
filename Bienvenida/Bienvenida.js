document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggleConnection');
    const label = document.getElementById('switchLabel');

    toggle.addEventListener('change', function() {
        if (toggle.checked) {
            label.textContent = 'Apagar';
        } else {
            label.textContent = 'Encender';
        }
    });
});


// Función para redirigir a la página deseada

// Espera a que el contenido del DOM se cargue completamente
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar los enlaces por ID y añadir eventos de clic
    document.getElementById('gestion-usuarios-btn').addEventListener('click', function(event) {
        event.preventDefault(); // Evita la acción predeterminada del enlace
        redirectToPage('./GestiondeUser/GestionUsuarios.html'); // Cambia a la URL correcta
    });

    document.getElementById('configuracion-btn').addEventListener('click', function(event) {
        event.preventDefault(); // Evita la acción predeterminada del enlace
        redirectToPage('Configuracion.html'); // Cambia a la URL correcta
    });

    document.getElementById('monitoreo-btn').addEventListener('click', function(event) {
        event.preventDefault(); // Evita la acción predeterminada del enlace
        redirectToPage('Monitoreo.html'); // Cambia a la URL correcta
    });
});