// Array para almacenar los turnos
const listaTurnos = [];

// Función para guardar el turno
function guardarTurno(event) {
  event.preventDefault(); // Prevenir el envío del formulario

  // Obtener los valores del formulario
  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("email").value;
  const especialidad = document.getElementById("especialidad").value;
  const fecha = document.getElementById("fecha").value;
  const hora = document.getElementById("hora").value;

  // Convertir la hora seleccionada en formato de Date para facilitar la comparación
  const horaSeleccionada = new Date(`2000-01-01T${hora}:00`);

  // Verificar si la hora está dentro del horario de atención (8:30 a 13:30 y de 17:00 a 21:00)
  const horaAperturaManana = new Date(`2023-01-01T08:30:00`);
  const horaCierreManana = new Date(`2023-01-01T13:30:00`);
  const horaAperturaTarde = new Date(`2023-01-01T17:00:00`);
  const horaCierreTarde = new Date(`2023-01-01T21:00:00`);

  if (
    (horaSeleccionada >= horaAperturaManana && horaSeleccionada <= horaCierreManana) ||
    (horaSeleccionada >= horaAperturaTarde && horaSeleccionada <= horaCierreTarde)
  ) {
    // Verificar si ya existe un turno para la misma fecha y hora
    const turnoExistente = listaTurnos.find(
      turno => turno.fecha === fecha && turno.hora === hora
    );

    if (turnoExistente) {
      // Si ya hay un turno para esa fecha y hora, mostrar mensaje de error
      alert("Ya existe un turno para esa fecha y hora. Por favor, elige otra fecha u hora.");
    } else {
      // Si no hay un turno para esa fecha y hora, guardar el nuevo turno
      const turno = {
        nombre,
        email,
        especialidad,
        fecha,
        hora,
      };

      // Agregar el turno a la lista de turnos
      listaTurnos.push(turno);

      // Limpiar el formulario
      document.getElementById("formularioTurno").reset();

      // Mostrar mensaje de éxito (esto lo puedes modificar según tu diseño)
      alert("Turno reservado exitosamente.");

      // Mostrar los turnos almacenados en la interfaz
      mostrarTurnos();
    }
  } else {
    // Si la hora seleccionada está fuera del horario de atención, mostrar mensaje de error
    alert("Los turnos solo se pueden reservar entre las 8:30 y las 13:30, y entre las 17:00 y las 21:00.");
  }
}

// Función para mostrar los turnos en la interfaz
function mostrarTurnos() {
  const turnosContainer = document.getElementById("turnosContainer");
  turnosContainer.innerHTML = "";

  listaTurnos.forEach((turno, index) => {
    const turnoDiv = document.createElement("div");
    turnoDiv.className = "turno-item";
    turnoDiv.innerHTML = `
      <input type="text" value="${turno.nombre}" disabled>
      <input type="text" value="${turno.email}" disabled>
      <input type="text" value="${turno.especialidad}" disabled>
      <input type="text" value="${turno.fecha}" disabled>
      <input type="text" value="${turno.hora}" disabled>
      <button class="btn btn-danger" onclick="cancelarTurno(${index})">Cancelar</button>
    `;

    turnosContainer.appendChild(turnoDiv);
  });
}

// Función para cancelar el turno
function cancelarTurno(index) {
  listaTurnos.splice(index, 1); // Eliminar el turno del array
  mostrarTurnos(); // Actualizar la visualización de los turnos
}

// Agregar evento al formulario cuando se envíe
document.getElementById("formularioTurno").addEventListener("submit", guardarTurno);

// Obtener el elemento de fecha y configurar los atributos min y max
const fechaInput = document.getElementById("fecha");
const fechaActual = new Date();
const fechaMaxima = new Date();
fechaMaxima.setDate(fechaMaxima.getDate() + 30); // Permitir reservas hasta 30 días en el futuro
fechaInput.min = fechaActual.toISOString().split("T")[0];
fechaInput.max = fechaMaxima.toISOString().split("T")[0];

// Obtener el elemento de hora y configurar los atributos min y max
const horaInput = document.getElementById("hora");
horaInput.min = "08:30";
horaInput.max = "21:00";
