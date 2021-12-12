//Reglas y Esquema de la Coleccion Categorias
var mongoose = require('mongoose');

//Objeto estructura de nuestro esquema
var esquema = new mongoose.Schema({
    nombre: String,
    imagen: String
});

module.exports = mongoose.model('categorias',esquema);   //categorias: nombre de la coleccion