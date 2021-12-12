var express = require('express');
var router = express.Router();
var cliente = require('../models/cliente');  // Esta variable del modelo, es el que se usa para el CRUD
var mongoose = require('mongoose');

//OBTENER UN CLIENTE por usuario y contraseña
router.get('/:user/:pass', function(req,res){
    cliente.find({user: req.params.user, password: req.params.pass}).then(result=>{
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

//CREAR UN CLIENTE
router.post('/', function(req,res){
    //Agregar a la coleccion de CLIENTES
    let C = new cliente({
        _id: mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        user: req.body.user,
        password: req.body.password
    });
    C.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

//EDITAR INFORMACION CLIENTE
router.put('/:id', function(req,res){
    cliente.update(
        {//FILTRO
            _id:req.params.id
        },
        {//DATOS NUEVOS
            nombre: req.body.nombre,
            email: req.body.email, 
            telefono: req.body.telefono,
            user: req.body.user, 
            password: req.body.password
            
        }).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})


module.exports = router;