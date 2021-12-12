import { PedidosService } from './../services/pedidos.service';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  pedidos:any='';
  pedidoActual:any=''

  constructor(
    private modalService: NgbModal,
    private PedidosService:PedidosService) { }

  ngOnInit(): void {
  }

  verPedidos(usuario:any){
    this.PedidosService.obtenerPedidos(usuario).subscribe(res=>
      {
        this.pedidos = res;
        console.log(this.pedidos);
      },  
      error=>{
        console.log(error)
      })     
  }

  verDetalle(modal: any, pedido:any){
    this.pedidoActual = pedido;
    console.log('Pedido Actual',this.pedidoActual);
    this.modalService.open(modal, {size: 'lg'});
  }

}
