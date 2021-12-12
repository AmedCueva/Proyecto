import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  @Output() onIrAlCarrito = new EventEmitter();
  subtotal:any=0;
  productos:any=[];
  empresaActual:any={
    nombre:''
  };
  productoActual:any;
  cantidad:any=0;

  formularioPedido = new FormGroup ({
    cantidad: new FormControl ('', [Validators.required])
  });

  carrito:any={
    empresa: this.empresaActual.nombre,
    products: [],
    subtotal: 0,
    isv: 0,
    comision: 0,
    total: 0,
  }

  
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  verProductos(empresa:any){
    console.log(empresa.productos);
    this.empresaActual = empresa;
    this.productos = empresa.productos;
  }

  alCarrito(modal:any, producto:any){
    this.modalService.open(modal, {size: 'xs'});
    this.productoActual = producto;
    console.log(this.productoActual);
  }

  agregarAlCarrito(){
    this.carrito.empresa = this.empresaActual.nombre;
    this.cantidad = this.formularioPedido.value.cantidad;
    let pro = {
      nombre: this.productoActual.nombre,
      precio: this.productoActual.precio,
      cantidad: this.cantidad
    }
    this.carrito.products.push(pro);
    this.subtotal = this.subtotal + (pro.cantidad*pro.precio)

    this.carrito.subtotal = this.subtotal;
    this.carrito.isv = this.carrito.subtotal * 0.15;
    this.carrito.comision = 60;
    this.carrito.total= this.carrito.subtotal + this.carrito.isv + this.carrito.comision;
    console.log(this.carrito);
    
    this.onIrAlCarrito.emit(this.carrito);
    this.modalService.dismissAll();
  }
}
