import { PedidosService } from './../services/pedidos.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  @Output() onProcesar = new EventEmitter();
  carrito:any={
    empresa: '',
    products: [],
    subtotal: 0,
    isv: 0,
    comision: 0,
    total: 0,
  }

  formularioDetalle = new FormGroup ({
    latitud: new FormControl ('', [Validators.required]),
    longitud: new FormControl ('', [Validators.required]),
    tipoPago: new FormControl ('', [Validators.required]),
  });
  detalle:any={
    latitud: '',
    longitud: '',
    tipoPago: ''
  };

  constructor(private modalService: NgbModal,
    private PedidosService:PedidosService) { }

  ngOnInit(): void {
  }

  verCarrito(carrito:any){
    this.carrito = carrito;
  }

  procesar(modal:any){
    this.modalService.open(modal, {size: 'xs'});
  }

  terminar(){
    this.detalle.latitud = this.formularioDetalle.value.latitud;
    this.detalle.longitud = this.formularioDetalle.value.longitud,
    this.detalle.tipoPago = this.formularioDetalle.value.tipoPago,
    this.modalService.dismissAll();

    this.onProcesar.emit();
  }

  agregar(usuario:any){
    this.PedidosService.agregarPedido(this.carrito, this.detalle, usuario).subscribe(res=>
      {
        console.log(res);
      },  
      error=>{
        console.log(error)
      }) ;
  }

  borrarCarrito(){
    this.carrito={
      empresa: '',
      products: [],
      subtotal: 0,
      isv: 0,
      comision: 0,
      total: 0,
    }
  }

}
