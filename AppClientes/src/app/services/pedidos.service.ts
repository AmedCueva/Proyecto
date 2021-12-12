import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  constructor(private httpClient: HttpClient) { }

  obtenerPedidos(clienteID: any){
    return this.httpClient.get(`http://localhost:8888/pedidos/cliente/${clienteID}`, {});
  } 

  agregarPedido(carrito:any, detalle:any, usuario:any){
    return this.httpClient.post(`http://localhost:8888/pedidos/`, {
      fecha: new Date(),
      clienteID: usuario._id,
      cliente: usuario.nombre,
      telefono: usuario.telefono,
      direccion: [detalle.latitud, detalle.longitud],
      empresa: carrito.empresa,
      productos: carrito.products,
      subtotal: carrito.subtotal,
      isv: carrito.isv,
      comision: carrito.comision,
      total: carrito.total,
      tipoPago: detalle.tipoPago,
    });
  }

}
