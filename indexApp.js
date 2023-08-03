document.addEventListener("DOMContentLoaded", function() {
    // Obtener referencia al botón "Iniciar sesión"
    const btnIniciarSesion = document.querySelector(".btn-primary");
    btnIniciarSesion.addEventListener("click", function(event) {
      event.preventDefault();
      // Obtener valores del formulario
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Validar el correo electrónico y contraseña (puedes agregar más validaciones si es necesario)
      if (validateEmail(email) && password.trim() !== "") {
        // Si las credenciales son válidas, redirigir a la página de inicio
        window.location.href = "pagina-de-inicio.html";
      } else {
        alert("Por favor, ingresa un correo electrónico válido y una contraseña.");
      }
    });
  
    // Obtener referencia al botón "Registrate aquí"
    const btnRegistrarse = document.querySelector(".btn-secondary");
    btnRegistrarse.addEventListener("click", function() {
      // Redirigir a la página de registro
      window.location.href = "/login.html";
    });
  });
  
  // Función para validar el correo electrónico
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  // Función para validar la contraseña (mínimo 6 caracteres)
function validatePassword(password) {
  return password.length >= 6;
}