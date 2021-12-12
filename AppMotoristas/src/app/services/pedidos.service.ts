import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private httpClient: HttpClient) { }

  obtenerPedidosPendientes(){
    return this.httpClient.get(`http://localhost:8888/pedidos/`, {});
  } 

  obtenerPedidosMotorista(motoristaID: any){
    return this.httpClient.get(`http://localhost:8888/pedidos/motorista/${motoristaID}`, {});
  } 

  tomarPedido(pedido:any, usuario:any){
    return this.httpClient.put(`http://localhost:8888/pedidos/${pedido._id}`, {
            fecha: pedido.fecha,
            clienteID: pedido.clienteID,
            cliente: pedido.cliente,
            telefono: pedido.telefono,
            direccion: pedido.direccion,
            empresa: pedido.empresa,
            productos: pedido.productos,
            subtotal: pedido.subtotal,
            isv: pedido.isv,
            comision: pedido.comision,
            total: pedido.total,
            tipoPago: pedido.tipoPago,
            motoristaID: usuario._id,
            motorista: usuario.nombre,
            estado: "Asignado"        
    });
  }

  cambiarEstadoPedido(pedido:any){
    return this.httpClient.put(`http://localhost:8888/pedidos/${pedido._id}`, {
            fecha: pedido.fecha,
            clienteID: pedido.clienteID,
            cliente: pedido.cliente,
            telefono: pedido.telefono,
            direccion: pedido.direccion,
            empresa: pedido.empresa,
            productos: pedido.productos,
            subtotal: pedido.subtotal,
            isv: pedido.isv,
            comision: pedido.comision,
            total: pedido.total,
            tipoPago: pedido.tipoPago,
            motoristaID: pedido.motoristaID,
            motorista: pedido.motorista,
            estado: pedido.estado        
  });
  }

}
