import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() onIrPedidos = new EventEmitter();
  @Output() onIrHistorial = new EventEmitter();
  @Output() onIrPerfil = new EventEmitter();
  @Output() onSalir = new EventEmitter();
  @Output() onIrHome = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  irHome(){
    this.onIrHome.emit();
  }

  irPedidos(){
    this.onIrPedidos.emit();
  }

  irHistorial(){
    this.onIrHistorial.emit();
  }

  irPerfil(){
    this.onIrPerfil.emit();
  }

  salir(){
    this.onSalir.emit();
  }

}
