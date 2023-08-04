
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

                    console.log("Nombre y Apellido:", nombre);
                    console.log("Rol:", rol);
                    console.log("Email:", email);
                    console.log("Contraseña:", password);
                    console.log("Dirección:", direccion);
                    console.log("Teléfono:", telefono);
                    console.log("Código Postal:", codigoPostal);

                    alert("Registro exitoso. Datos almacenados correctamente.");

                    // Redirección después de 5 segundos
                    setTimeout(function() {
                        window.location.href = "/index.html"; // Reemplaza "index.html" con la URL de tu página principal
                    }, 3000); // 3000 milisegundos (3 segundos)
                });
            });
 