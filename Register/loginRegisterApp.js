
// Función para validar el correo electrónico
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

document.addEventListener("DOMContentLoaded", function () {
    // Obtener referencias a los elementos del formulario de registro
    const btnRegistrar = document.querySelector(".btn-success");
    const nombreInput = document.getElementById("nombreInput");
    const rolSelect = document.getElementById("rol");
    const emailInput = document.getElementById("emailInput");
    const passwordInput = document.getElementById("inputPass");
    const passwordRepeatInput = document.getElementById("inputPassRepeat");
    const direccionInput = document.getElementById("inputDirecc");
    const telefonoInput = document.getElementById("inputTelefono");
    const especializacionInput = document.getElementById("Especializacionimput");

    // Escuchar el evento change en el select de rol
    rolSelect.addEventListener("change", function () {
        if (rolSelect.value === "medico") {
            // Habilitar el input de especialización
            especializacionInput.disabled = false;
        } else {
            // Deshabilitar el input de especialización y restablecer su valor
            especializacionInput.disabled = true;
            especializacionInput.value = "";
        }
    });

    btnRegistrar.addEventListener("click", function (event) {
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

        // Validar la contraseña (al menos 5 caracteres y contiene letras y números)
        const isPasswordValid = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/.test(password);
        if (!isPasswordValid) {
            alert("La contraseña debe tener al menos 5 caracteres y contener letras y números.");
            return;
        }

        if (password !== passwordRepeat) {
            alert("Las contraseñas no coinciden. Por favor, verifica.");
            return;
        }

        // Generar un ID único basado en el rol (paciente o médico)
        const id = `${rol}-${Date.now()}`;

        // Verificar si ya existe un usuario con el mismo correo, ID o nombre
        const storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
        const isDuplicate = storedUsers.some(user => user.email === email || user.id === id || user.nombre === nombre);
        if (isDuplicate) {
            alert("Ya existe un usuario con el mismo correo, ID o nombre.");
            return;
        }

        // Crear un objeto con los datos del usuario, incluido el ID generado
        const usuario = {
            id: id,
            nombre: nombre,
            rol: rol,
            email: email,
            password: password,
            direccion: direccion,
            telefono: telefono,
        };

        // Agregar el nuevo usuario al arreglo y almacenarlo en el localStorage
        storedUsers.push(usuario);
        localStorage.setItem("usuarios", JSON.stringify(storedUsers));

        alert("Registro exitoso. Datos almacenados correctamente.");

        // Redirigir a la página principal después de 3 segundos
        setTimeout(function () {
            window.location.href = "../Home/index.html";
        }, 3000);
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const formularioLogin = document.getElementById("formularioLogin");

    formularioLogin.addEventListener("submit", function (event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Validar el correo electrónico y contraseña (puedes agregar más validaciones si es necesario)
        if (validateEmail(email) && password.trim() !== "") {
            // Buscar al usuario por su correo en el localStorage
            const storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
            const user = storedUsers.find(u => u.email === email && u.password === password);

            if (user) {
                redirectToLogin(user.id);
            } else {
                alert("Credenciales incorrectas.");
            }
        } else {
            alert("Por favor, ingresa un correo electrónico válido y una contraseña.");
        }
    });

    document.getElementById("btnRegistrarse").addEventListener("click", function () {
        // Redirigir a la página de registro deseada
        window.location.href = "../Register/Register.html";
    });
});

// Función para redirigir al usuario después de iniciar sesión
function redirectToLogin(userId) {
    const storedUsers = JSON.parse(localStorage.getItem("usuarios")) || [];
    const user = storedUsers.find(u => u.id === userId);

    if (!user) {
        alert("Usuario no encontrado.");
        return;
    }

    if (user.rol === "medico") {
        // Redireccionar a la página de administración de médicos
        window.location.href = `../Turnos/administracion_medicos.html?id=${userId}`;
    } else {
        // Redireccionar a la página de administración de pacientes
        window.location.href = `../Turnos/administracion_pacientes.html?id=${userId}`;
    }
}
