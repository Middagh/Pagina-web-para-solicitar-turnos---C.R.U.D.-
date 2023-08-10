document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencias a los elementos del formulario
    const btnRegistrar = document.querySelector(".btn-success");
    const nombreInput = document.getElementById("nombreInput");
    const rolSelect = document.getElementById("rol");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("inputPass");
    const passwordRepeatInput = document.getElementById("inputPassRepeat");
    const direccionInput = document.getElementById("inputDirecc");
    const telefonoInput = document.getElementById("inputTelefono");

    // Obtener referencia al input de especialización
    const especializacionInput = document.getElementById("Especializacionimput");

    // Escuchar el evento change en el select de rol
    rolSelect.addEventListener("change", function() {
        if (rolSelect.value === "medico") {
            // Habilitar el input de especialización
            especializacionInput.disabled = false;
        } else {
            // Deshabilitar el input de especialización y restablecer su valor
            especializacionInput.disabled = true;
            especializacionInput.value = "";
        }
    });

    btnRegistrar.addEventListener("click", function(event) {
        event.preventDefault();

        const nombre = nombreInput.value;
        const rol = rolSelect.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const passwordRepeat = passwordRepeatInput.value;
        const direccion = direccionInput.value;
        const telefono = telefonoInput.value;

        if (nombre === "" || email === "" || password === "" || passwordRepeat === "" || direccion === "" || telefono === "") {
            alert("Por favor, completa todos los campos.");
            return;
        }

        if (rol === "") {
            alert("Por favor, selecciona una opción válida en el campo de rol.");
            return;
        }

        if (password !== passwordRepeat) {
            alert("Las contraseñas no coinciden. Por favor, verifica.");
            return;
        }

        // Generar un ID único basado en el rol (paciente o médico)
        const id = `${rol}-${Date.now()}`;

        // Crear un objeto con los datos del usuario
        const usuario = {
            nombre: nombre,
            rol: rol,
            email: email,
            password: password,
            direccion: direccion,
            telefono: telefono,
        };

        // Convertir el objeto a JSON y almacenarlo en el localStorage
        localStorage.setItem("usuario", JSON.stringify(usuario));

        alert("Registro exitoso. Datos almacenados correctamente.");
    });
});
