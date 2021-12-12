import { PedidosService } from './../services/pedidos.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() onIrPedidos = new EventEmitter();
  @Output() onTomarPedido = new EventEmitter();
  pedidos:any=[];
  pedidoActual:any='';

  constructor(
    private modalService: NgbModal,
    private PedidosService:PedidosService) { }

  ngOnInit(): void {
    this.PedidosService.obtenerPedidosPendientes().subscribe(res=>
      {
        console.log(res);
        this.pedidos = res;
      },  
      error=>{
        console.log(error)
      })     
  }

  obtenerPedidos(){
    this.PedidosService.obtenerPedidosPendientes().subscribe(res=>
      {
        console.log(res);
        this.pedidos = res;
      },  
      error=>{
        console.log(error)
      })     
  }

  verDetalle(modal: any, pedido:any){
    this.pedidoActual = pedido;
    this.modalService.open(modal, {size: 'lg'});
  }

  irPedidosAsignados(){
    this.onIrPedidos.emit();
  }

  tomarPedido(pedido:any){
    this.modalService.dismissAll();
    this.onTomarPedido.emit(pedido);
    this.onIrPedidos.emit();
  }

  asignarPedido(pedido:any, usuario:any){
    this.PedidosService.tomarPedido(pedido, usuario).subscribe(res=>
      {
        console.log(res)
      },  
      error=>{
        console.log(error)
      })    
  }
}
