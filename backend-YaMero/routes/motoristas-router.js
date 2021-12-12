var express = require('express');
var router = express.Router();
var motorista = require('../models/motorista');  // Esta variable del modelo, es el que se usa para el CRUD
var mongoose = require('mongoose');

//OBTENER TODOS LOS MOTORISTAS
router.get('/', function(req,res){
    motorista.find().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

//OBTENER UN MOTORISTAS por usuario y contraseña
router.get('/:id', function(req,res){
    motorista.find({_id: req.params.id}).then(result=>{
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})


//OBTENER UN MOTORISTAS por usuario y contraseña
router.get('/:user/:pass', function(req,res){
    motorista.find({user: req.params.user, password: req.params.pass}).then(result=>{
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

//CREAR UN MOTORISTA
router.post('/', function(req,res){
    //Agregar a la coleccion de MOTORISTAS
    let M = new motorista({
        _id: mongoose.Types.ObjectId(),
        nombre: req.body.nombre,
        email: req.body.email,
        telefono: req.body.telefono,
        user: req.body.user,
        password: req.body.password,
        placa: req.body.placa,
        estado: req.body.estado
    });
    M.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

//EDITAR INFORMACION MOTORISTA
router.put('/:id', function(req,res){
    motorista.update(
        {//FILTRO
            _id:req.params.id
        },
        {//DATOS NUEVOS
            nombre: req.body.nombre,
            email: req.body.email,
            telefono: req.body.telefono,
            user: req.body.user,
            password: req.body.password,
            placa: req.body.placa,
            estado: req.body.estado,
        }).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

module.exports = router;