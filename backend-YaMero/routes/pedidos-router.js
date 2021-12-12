var express = require('express');
var router = express.Router();
var pedido = require('../models/pedido');  // Esta variable del modelo, es el que se usa para el CRUD
var mongoose = require('mongoose');

//OBTENER TODOS LOS PEDIDOS PENDIENTES
router.get('/', function(req,res){
    pedido.find({estado: 'Pendiente'}).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

//OBTENER TODOS LOS PEDIDOS de UN CLIENTE
router.get('/cliente/:idcliente', function(req,res){
    pedido.find({clienteID: req.params.idcliente}).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

//OBTENER TODOS LOS PEDIDOS de UN MOTORISTA
router.get('/motorista/:idmotorista', function(req,res){
    pedido.find({motoristaID: req.params.idmotorista}).then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

//OBTENER UN PEDIDO
router.get('/:id', function(req,res){
    pedido.find({_id: req.params.id}).then(result=>{
        res.send(result[0]);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

//AGREGAR UN PEDIDO
router.post('/', function(req,res){
    //Agregar a la coleccion de PEDIDOS
    let P = new pedido({
        _id: mongoose.Types.ObjectId(),
            fecha: req.body.fecha,
            clienteID: req.body.clienteID,
            cliente: req.body.cliente,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            motoristaID: "",
            motorista:"",
            estado: "Pendiente",
            empresa: req.body.empresa,
            productos: req.body.productos,
            subtotal: req.body.subtotal,
            isv: req.body.isv,
            comision: req.body.comision,
            total: req.body.total,
            tipoPago: req.body.tipoPago,
    });
    P.save().then(result=>{
        res.send(result);
        res.end();
    }).catch(error=>{
        res.send(error);
        res.end();
    });
})

//CAMBIAR ESTADO DEL PEDIDO
router.put('/:id', function(req,res){
    pedido.update(
        {//FILTRO
            _id:req.params.id
        },
        {//DATOS NUEVOS           
            fecha: req.body.fecha,
            clienteID: req.body.clienteID,
            cliente: req.body.cliente,
            telefono: req.body.telefono,
            direccion: req.body.direccion,
            empresa: req.body.empresa,
            productos: req.body.productos,
            subtotal: req.body.subtotal,
            isv: req.body.isv,
            comision: req.body.comision,
            total: req.body.total,
            tipoPago: req.body.tipoPago,
            motoristaID: req.body.motoristaID,
            motorista: req.body.motorista,
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