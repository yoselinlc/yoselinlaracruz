// recuperar datos de las cajas de texto
const txtNoCuenta = document.getElementById("no_cuenta");
const txtNombre = document.getElementById("nombre");
const optCarrera = document.getElementById("carrera");
const txtPromedio= document.getElementById("promedio");
const btnGuardar = document.getElementById("btn_guardar");

// recuperar el cuerpo de la tabla
const tablaAlumnos = document.querySelector("#tabla_alumnos tbody");

btnGuardar.addEventListener("click", function (e) {
    e.preventDefault();
    // crear un objeto de tipo alumno
    const alumno = {
        nocuenta: txtNoCuenta.value,
        nombre: txtNombre.value.toUpperCase(),
        carrera: optCarrera.value.toUpperCase(),
        promedio: Number(txtPromedio.value)
    };
    insertarAlumnosATabla(alumno);

});
function insertarAlumnosATabla(alumno) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td><img src="img/${alumno.nocuenta}.png" alt="" width="100" height="100"></td>
        <td>${alumno.nocuenta}</td>
        <td>${alumno.nombre}</td>
        <td>${alumno.carrera}</td>
        <td>${alumno.promedio}</td>
    `;
    tablaAlumnos.appendChild(row);
}