const Reserva = require('../models/Reserva');
const ctrl = {};

ctrl.renderListaReservas = (req, res) => {
    res.render('listado-reserva')
}

ctrl.renderFormNuevaReserva = (req, res) => {
    res.render('nueva-reserva');
}

ctrl.renderFormEditarReserva = (req, res) => {
    const { id } = req.params;
    res.render('editar-reserva', { id })
}


// ==========================================
//         Rutas para CRUD de reservas
// ==========================================


// Obtener todas las reservas de la tabla reservas

// SELECT * FROM reservas WHERE estado=true
ctrl.obtenerReserva = async (req, res) => {
    try {
        const reservas = await Reserva.findAll({
            where: {
                estado: true
            }
        });

        return res.json(reservas);
    } catch (error) {
        console.log('Error al obtener las reservas', error);
        return res.status(500).json({
            message: 'Error al obtener las reservas'
        })
    }
}


// Crear una reserva
// INSERT INTO reservas (nombre, apellido, fecha_ingreso, fecha_salida, nroHabitacion, telefono)
ctrl.crearReserva = async (req, res) => {
    const {
        nombre,
        apellido,
        fecha_ingreso,
        fecha_salida,
        habitacion,
        cantidad_personas,
        telefono,
        email
    } = req.body;

    console.log("datos que vienen en la petición: ", req.body);

   try {
        const nuevaReserva = new Reserva({
            nombre,
            apellido,
            fecha_ingreso,
            fecha_salida,
            habitacion,
            cantidad_personas,
            telefono,
            email
        });

        // Se guarda en la BD
        await nuevaReserva.save();

        return res.status(201).json({
            message: 'Reserva creada con éxito'
        })
   } catch (error) {
    console.log('Error al crear la reserva', error);
    return res.status(500).json({
        message: 'Error al crear la reserva'
    })
   }
}

// Actualizar una reserva
ctrl.actualizarReserva = async (req, res) => {
    // TODO: Completar controlador
}

// Eliminar una reserva de forma lógica
ctrl.eliminarReserva = async (req, res) => {
    // TODO: Completar controlador
}

module.exports = ctrl;