//Reglas y Esquema de la Coleccion Empresas
var mongoose = require('mongoose');

//Objeto estructura de nuestro esquema
var esquema = new mongoose.Schema({
    categoriaID: String,
    nombre: String,
    logo: String,
    banner: String,
    descripcion: String,
    calificacion: String,
    direccion: String,
    telefono: String,
    productos: mongoose.SchemaTypes.Mixed,
});

module.exports = mongoose.model('empresas',esquema);   //empresas: nombre de la coleccion