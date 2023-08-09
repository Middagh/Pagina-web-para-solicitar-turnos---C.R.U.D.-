document.addEventListener("DOMContentLoaded", function() {
    const btnRegistrar = document.querySelector(".btn-success");

    btnRegistrar.addEventListener("click", function(event) {
        event.preventDefault();

        const nombre = document.getElementById("nombreInput").value;
        const rol = document.getElementById("rol").value;
        const email = document.getElementById("emailInput").value;
        const password = document.getElementById("inputPass").value;
        const direccion = document.getElementById("inputDirecc").value;
        const telefono = document.getElementById("inputTelefono").value;
        const codigoPostal = document.getElementById("inputCP").value;

        if (nombre === "" || email === "" || password === "" || direccion === "" || telefono === "" || codigoPostal === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        const rolSelect = document.getElementById("rol");
        if (rolSelect.value === "") {
            alert("Por favor, selecciona una opción válida en el campo de rol.");
            return;
        }

        // Crear un objeto con los datos del usuario
        const usuario = {
            nombre: nombre,
            rol: rol,
            email: email,
            password: password,
            direccion: direccion,
            telefono: telefono,
            codigoPostal: codigoPostal
        };

        // Convertir el objeto a JSON y almacenarlo en el localStorage
        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Registro exitoso. Datos almacenados correctamente.");

        // Redirección después de 5 segundos
        setTimeout(function() {
            window.location.href = "/index.html"; // Reemplaza "index.html" con la URL de tu página principal
        }, 3000); // 3000 milisegundos (3 segundos)
    });
});
