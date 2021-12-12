var express = require('express');
var router = express.Router();
var categoria = require('../models/categoria');  // Esta variable del modelo, es el que se usa para el CRUD
var mongoose = require('mongoose');

//OBTENER TODAS LAS CATEGORIAS
router.get('/', function(req,res){
    categoria.find().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

module.exports = router;

