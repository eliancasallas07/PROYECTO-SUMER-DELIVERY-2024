// script.js
document.getElementById('create-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario por defecto
    
    // Obtiene el estado de los checkboxes
    let applyChanges = document.getElementById('apply-changes').checked;
    let cancel = document.getElementById('cancel').checked;

    // Aquí puedes manejar los datos del formulario y los checkboxes como desees
    if (applyChanges) {
        console.log('Aplicar Cambios seleccionado');
    }
    if (cancel) {
        console.log('Cancelar seleccionado');
    }

    // Lógica para procesar el formulario
    alert('Formulario enviado');
});