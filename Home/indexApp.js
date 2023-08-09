// Función para validar el correo electrónico
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Función para redirigir al usuario después de iniciar sesión
function redirectToLogin(isMedico) {
  if (isMedico) {
    // Redireccionar a la página de administración de médicos
    window.location.href = "/administracion_medicos.html";
  } else {
    // Redireccionar a la página de administración de pacientes
    window.location.href = "administracion_pacientes.html";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const formularioLogin = document.getElementById("formularioLogin");

  formularioLogin.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const isMedico = document.getElementById("switchOff").checked; // Verificar si el switch "Médico" está activado

      // Validar el correo electrónico y contraseña (puedes agregar más validaciones si es necesario)
      if (validateEmail(email) && password.trim() !== "") {
          // Redireccionar según el valor de "isMedico"
          redirectToLogin(isMedico);
      } else {
          alert("Por favor, ingresa un correo electrónico válido y una contraseña.");
      }
  });
});

document.getElementById("btnRegistrarse").addEventListener("click", function() {
  // Redirigir a la página de registro deseada
  window.location.href = "../Register/Register.html"; // Reemplaza "login.html" con la URL de la página de registro
});
