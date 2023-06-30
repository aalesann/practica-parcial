document.addEventListener('DOMContentLoaded', async () => {

    // Pedir las reservas al servidor
    const data = await fetch('http://localhost:4000/api')
    const reservas = await data.json();
    console.log(reservas);


    // Mostrar las reservas en la tabla
    const tbody = document.querySelector('#listadoReservas');

    let registros = '';
    reservas.forEach( reserva => {
        registros += `
            <tr>
                <td>${reserva.codigo}</td>
                <td>${reserva.nombre}</td>
                <td>${reserva.apellido}</td>
                <td>${reserva.fecha_ingreso}</td>
                <td>${reserva.fecha_salida}</td>
                <td>${reserva.habitacion}</td>
                <td>${reserva.cantidad_personas}</td>
                <td>${reserva.telefono}</td>
                <td>ACCIONES</td>
            </tr>
        `
    })

    tbody.innerHTML = registros;




});