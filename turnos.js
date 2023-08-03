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

    // Verificar si ya existe un turno para la misma fecha y hora
    const turnoExistente = listaTurnos.find(turno => turno.fecha === fecha && turno.hora === hora);

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
  }

  // Agregar evento al formulario cuando se envíe
  document.getElementById("formularioTurno").addEventListener("submit", guardarTurno);

