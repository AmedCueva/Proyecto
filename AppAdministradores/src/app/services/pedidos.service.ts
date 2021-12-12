import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private httpClient: HttpClient) { }

  obtenerPedidosPendientes(){
    return this.httpClient.get(`http://localhost:8888/pedidos/`, {});
  } 

  asignarPedido(pedido:any, usuario:any){
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
}
