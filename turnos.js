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
    }
  } else {
    // Si la hora seleccionada está fuera del horario de atención, mostrar mensaje de error
    alert("Los turnos solo se pueden reservar entre las 8:30 y las 13:30, y entre las 17:00 y las 21:00.");
  }
}
