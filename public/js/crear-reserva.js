document.addEventListener('DOMContentLoaded', () => {
    const formCrearReserva = document.querySelector("#formNuevaReserva")

formCrearReserva.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nombre = document.querySelector('#nombre').value;
    const apellido = document.querySelector('#apellido').value;
    const fecha_ingreso = document.querySelector('#fecha_ingreso').value;
    const fecha_salida = document.querySelector('#fecha_salida').value;
    const habitacion = document.querySelector('#habitacion').value;
    const cantidad_personas = document.querySelector('#cantidad_personas').value;
    const telefono = document.querySelector('#telefono').value;
    const email = document.querySelector('#email').value;


    const response = await fetch('http://localhost:4000/api', {
        method: 'POST',
        body: JSON.stringify({
            nombre,
            apellido,
            fecha_ingreso,
            fecha_salida,
            habitacion,
            cantidad_personas,
            telefono,
            email
        })
    });

    const data = await response.json()

    if(!response.ok){
        alert('ERROR:', data.message)
        console.error(message);
    }

    console.log({data})
    alert(data.message);
});
})