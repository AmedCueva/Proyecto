var mongoose = require('mongoose');

//Nombre de la base de datos --- Puerto de mongo --- Servidor
let bd = 'yamero';
let port = '27017';
let host = 'localhost';

class Database{
    constructor(){
        this.conectar();
    }

    conectar(){
        mongoose.connect(`mongodb://${host}:${port}/${bd}`)
        .then(result=>console.log('Conectado a MONGODB-(YAMERO)'))
        .catch(error=>console.log(error));
    }
}

//Exportar una nueva instancia de la conexion a la bd
module.exports = new Database();