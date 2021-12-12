//Reglas y Esquema de la Coleccion Pedidos
var mongoose = require('mongoose');

//Objeto estructura de nuestro esquema
var esquema = new mongoose.Schema({
    fecha: String,
    clienteID: String,
    cliente: String,
    telefono: String,
    empresa: String,
    motoristaID: String,
    motorista: String,
    estado: String, //Estados: Pendiente, En Origen, En camino, En Destino, Entregado
    direccion: mongoose.SchemaTypes.Mixed,
    tipoPago: String,
    productos: mongoose.SchemaTypes.Mixed,
    subtotal: String,
    isv: String,
    comision: String,
    total: String
});

module.exports = mongoose.model('pedidos',esquema);   //pedidos: nombre de la coleccion