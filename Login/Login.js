function logeo(event) {
    event.preventDefault(); 

    // Obtiene los valores de los campos de entrada
    let user = document.getElementById("Usuario").value;
    let pass = document.getElementById("Clave").value;
    let rol = document.getElementById("TipoUsuario").value;

    // Verifica las credenciales y el rol
    if (user === "administrador2024" && pass === "1234" && rol === "Administrador") {
        // Redirige a la página de gestión de usuarios
        window.location.href = "../Bienvenida/Bienvenida.html";
    } else {
        // Muestra un mensaje de error si las credenciales o el rol son incorrectos
        alert("DATOS INCORRECTOS O ROL NO AUTORIZADO");
    }
}

