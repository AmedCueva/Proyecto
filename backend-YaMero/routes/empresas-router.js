var express = require('express');
var router = express.Router();
var empresa = require('../models/empresa');  // Esta variable del modelo, es el que se usa para el CRUD
var mongoose = require('mongoose');

//OBTENER TODAS LAS EMPRESAS 
router.get('/', function(req,res){
    empresa.find({}).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})


//OBTENER TODAS LAS EMPRESAS DE UNA CATEGORIA
router.get('/:idcategoria/empresas', function(req,res){
    empresa.find({categoriaID: req.params.idcategoria}).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

//OBTENER UNA EMPRESA
router.get('/:id', function(req,res){
    empresa.find({_id: req.params.id}).then(result=>{
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

//AGREGAR UNA EMPRESA
router.post('/', function(req,res){
    //Agregar a la coleccion de EMPRESAS
    let P = new empresa({
        _id: mongoose.Types.ObjectId(),
        categoriaID: req.body.idcategoria,
        nombre: req.body.nombre,
        logo: "../../assets/empresas/default/logo.png",
        banner: "../../assets/empresas/default/banner.png",
        descripcion: req.body.descripcion,
        calificacion: 0,
        direccion: req.params.direccion,
        telefono: req.params.telefono,
        productos: []
    });
    P.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})


//AGREGAR PRODUCTO A UNA EMPRESA
router.post('/:id', function(req,res){
    empresa.updateOne(
        {//FILTRO
            _id:req.params.id
        },
        {//DATOS NUEVOS
            $push:{productos:{
                nombre: req.body.nombre,
                precio: req.body.precio,
                imagen: "../../assets/empresas/default/productos.png"
                }}
        }).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})



module.exports = router;
