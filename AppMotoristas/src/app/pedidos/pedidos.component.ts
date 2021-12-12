import { PedidosService } from './../services/pedidos.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  @Output() onCambiarEstado = new EventEmitter();
  pedidos:any=[];
  pedidoActual:any='';

  constructor(
    private modalService: NgbModal,
    private PedidosService:PedidosService) { }

  ngOnInit(): void {
  }

  verPedidos(usuario:any){
    this.PedidosService.obtenerPedidosMotorista(usuario._id).subscribe(res=>
      {
        this.pedidos = res;
      },  
      error=>{
        console.log(error)
      });
  }

  verDetalle(modal: any, pedido:any){
    this.pedidoActual = pedido;
    this.modalService.open(modal, {size: 'lg'});
  }

  cambiarEstado(pedido:any){
    console.log(pedido);
    this.pedidoActual = pedido;

    if(pedido.estado == "En Destino"){
      this.pedidoActual.estado = "Entregado";
    }
    if(pedido.estado == "En Camino"){
      this.pedidoActual.estado = "En Destino";
    }
    if(pedido.estado == "En Origen"){
      this.pedidoActual.estado = "En Camino";
    }
    if(pedido.estado == "Asignado"){
      this.pedidoActual.estado = "En Origen";
    }
    
    this.PedidosService.cambiarEstadoPedido(this.pedidoActual).subscribe(res=>
      {
        console.log("Pedido Actualizado:", res);
      },  
      error=>{
        console.log(error)
      });;

    this.onCambiarEstado.emit();
  }

}
