document.addEventListener("DOMContentLoaded", function () {
  const formularioLogin = document.getElementById("formularioLogin");

  formularioLogin.addEventListener("submit", function (event) {
      event.preventDefault();

      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
      const isMedico = document.getElementById("switchOff").checked; // Verificar si el switch "Médico" está activado

      // Validar el correo electrónico y contraseña (puedes agregar más validaciones si es necesario)
      if (validateEmail(email) && password.trim() !== "") {
          // Realizar las acciones de inicio de sesión según el valor de "isMedico"
          if (isMedico) {
              // Redireccionar a la página de administración de médicos
              window.location.href = "/administracion_medicos.html";
          } else {
              // Aquí puedes redireccionar a otra página o realizar las acciones para otro tipo de usuario
              // Por ejemplo, a la página de administración de pacientes
              window.location.href = "/administracion_pacientes.html";
          }
      } else {
          alert("Por favor, ingresa un correo electrónico válido y una contraseña.");
      }
  });
});

// Función para validar el correo electrónico
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

document.getElementById("btnRegistrarse").addEventListener("click", function() {
  // Redirigir a la página de registro deseada
  window.location.href = "/login.html"; // Reemplaza "pagina_registro.html" con la URL de la página de registro
});

