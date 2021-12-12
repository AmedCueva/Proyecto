//Reglas y Esquema de la Coleccion Clientes
var mongoose = require('mongoose');

//Objeto estructura de nuestro esquema
var esquema = new mongoose.Schema({
    nombre: String,
    email: String,
    telefono: String,
    user: String,
    password: String
});

module.exports = mongoose.model('clientes',esquema);   //clientes: nombre de la coleccion