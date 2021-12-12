//Reglas y Esquema de la Coleccion Motoristas
var mongoose = require('mongoose');

//Objeto estructura de nuestro esquema
var esquema = new mongoose.Schema({
    nombre: String,
    email: String,
    telefono: String,
    user: String,
    password: String,
    placa: String,
    estado: String
});

module.exports = mongoose.model('motoristas',esquema);   //motoristas: nombre de la coleccion