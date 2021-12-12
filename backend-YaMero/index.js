var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

//MODULO DE LA BASe DE DATOS
var database = require('./modules/database');

//ROUTERS
var administradoresRouter = require('./routes/administradores-router');
var clientesRouter = require('./routes/clientes-router');
var empresasRouter = require('./routes/empresas-router');
var categoriasRouter = require('./routes/categorias-router');
var motoristasRouter = require('./routes/motoristas-router');
var pedidosRouter = require('./routes/pedidos-router');

var app = express();

//Middlewhere
app.use(cors()); // Permite peticiones de otros servidores (ORIGENES CRUZADOS)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//Direccion SEGUN URL
//Todo lo que lleve /usuarios al modulo de usuarios
app.use('/administradores', administradoresRouter);
app.use('/categorias', categoriasRouter);
app.use('/clientes', clientesRouter);
app.use('/empresas', empresasRouter);
app.use('/motoristas', motoristasRouter);
app.use('/pedidos', pedidosRouter);

//Al entrar al puerto
app.get('/', function(req,res){
    res.send('Conectado al puerto');
})

//Al Levantar el Servidor en el puerto
app.listen(8888, function(){
    console.log('Se levanto el servidor');
});