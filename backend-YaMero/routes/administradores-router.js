var express = require('express');
var router = express.Router();
var administrador = require('../models/administrador');  // Esta variable del modelo, es el que se usa para el CRUD
var mongoose = require('mongoose');

//OBTENER TODOS LOS ADMINISTRADORES
router.get('/', function(req,res){
    administrador.find().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

//OBTENER UN ADMINISTRADOR POR USUARIO Y CONTRASEÑA
router.get('/:user/:password', function(req,res){
    administrador.find({user: req.params.user, password: req.params.password}).then(result=>{
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})


module.exports = router;