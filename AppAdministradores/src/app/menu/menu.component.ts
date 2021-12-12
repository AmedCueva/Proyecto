import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Output() onIrHome = new EventEmitter();
  @Output() onIrPedidos = new EventEmitter();
  @Output() onIrEmpresas = new EventEmitter();
  @Output() onIrMotoristas = new EventEmitter();
  @Output() onLogout = new EventEmitter();

  usuarioActual:any='';

  constructor() { }

  ngOnInit(): void {
  }

  iraHome(){
    this.onIrHome.emit();
  }

  iraPedidos(){
    this.onIrPedidos.emit();
  }

  iraEmpresas(){
    this.onIrEmpresas.emit();
  }

  iraMotoristas(){
    this.onIrMotoristas.emit();
  }

  logout(){
    this.onLogout.emit();
  }

  cargarUsuario(usuario:any){
    this.usuarioActual = usuario;
  }


}
