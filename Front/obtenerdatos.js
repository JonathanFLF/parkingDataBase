// Obtiene los datos del usuario y del vehículo del backend
const usuario = obtenerUsuario();
const vehiculo = obtenerVehiculo(usuario.id);

// Actualiza la vista con los datos obtenidos
document.getElementById("nombre").textContent = usuario.nombre;
document.getElementById("apellido").textContent = usuario.apellido;
document.getElementById("placa").textContent = vehiculo.placa;
document.getElementById("color").textContent = vehiculo.color;
document.getElementById("hora-entrada").textContent = vehiculo.horaEntrada;
document.getElementById("hora-salida").textContent = vehiculo.horaSalida;
// Funciones para obtener los datos del backend
function obtenerUsuario() {
  // Código para obtener el usuario del backend
  return {
    id: 123,
    nombre: "Juan",
    apellido: "Pérez"
  };
}

function obtenerVehiculo(idUsuario) {
  // Código para obtener el vehículo del usuario del backend
  return {
    placa: "ABC123",
    color: "Rojo",
    horaEntrada: "09:00",
    horaSalida: "22:00"
  };
}
