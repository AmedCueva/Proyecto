import { MotoristasService } from './../services/motoristas.service';
import { PedidosService } from './../services/pedidos.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {
  @Output() onEditar0 = new EventEmitter();
  @Output() onEditar = new EventEmitter();
  pedidos:any=[];
  motoristas:any=[];
  pedidoActual:any='';
  motoristaActual:any;

  formularioMot = new FormGroup ({
    motoristaForm: new FormControl ('', [Validators.required])
  });

  constructor(
    private modalService: NgbModal,
    private PedidosService:PedidosService,
    private MotoristasService:MotoristasService
    ) { }

  ngOnInit(): void {
  }

  cargarPedidos(){
    this.PedidosService.obtenerPedidosPendientes().subscribe(res=>
      {
        this.pedidos = res;
      },  
      error=>{
        console.log(error)
      })
      
      this.MotoristasService.obtenerMotoristas().subscribe(res=>
        {
          this.motoristas = res;
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


  asignar(modal: any, pedido:any){
    this.modalService.open(modal, {size: 'lg'});
    this.pedidoActual = pedido;
  }

  asignarPedido(){
    let P = this.formularioMot.get('motoristaForm')?.value;

    this.MotoristasService.obtener1Motorista(P).subscribe(res=>
      {
        console.log(res);
        this.PedidosService.asignarPedido(this.pedidoActual, res).subscribe(res2=>
          {
            console.log(res2);
          },  
          error=>{
            console.log(error)
          })
      },  
      error=>{
        console.log(error)
      })

      this.modalService.dismissAll();
      this.onEditar0.emit();
      this.onEditar.emit();
  }

}
