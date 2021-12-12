import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  cantidad:any=0;
  @Output() onIrPedidos = new EventEmitter();
  @Output() onIrPerfil = new EventEmitter();
  @Output() onSalir = new EventEmitter();
  @Output() onIrHome = new EventEmitter();
  @Output() onIrCarrito = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  irHome(){
    this.onIrHome.emit();
  }

  irPedidos(){
    this.onIrPedidos.emit();
  }

  irPerfil(){
    this.onIrPerfil.emit();
  }

  irCarrito(){
    this.onIrCarrito.emit();
  }

  salir(){
    this.onSalir.emit();
  }

  contar(cantidad:any){
    this.cantidad = cantidad;
  }

}
