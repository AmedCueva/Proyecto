import { ProductosComponent } from './productos/productos.component';
import { MotoristasComponent } from './motoristas/motoristas.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { MenuComponent } from './menu/menu.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('menu') MenuComponent:MenuComponent | undefined;
  @ViewChild('pedidos') PedidosComponent:PedidosComponent | undefined;
  @ViewChild('empresas') EmpresasComponent:EmpresasComponent | undefined;
  @ViewChild('motoristas') MotoristasComponent:MotoristasComponent | undefined;
  @ViewChild('productos') ProductosComponent:ProductosComponent | undefined;


  title = 'AppAdministradores';
  usuarioActual:any='';
  regionVisible:any='login';
  
  
  //Funciones para cambios de Pantalla
  login(usuario:any){
    this.regionVisible='home';
    this.usuarioActual=usuario;
    console.log(this.usuarioActual);
    this.MenuComponent?.cargarUsuario(this.usuarioActual);
  }

  iraHome(){
    this.regionVisible='home';
  }

  iraEmpresas(){
    this.regionVisible='empresas';
    this.EmpresasComponent?.cargarEmpresas();
  }

  iraProductos(empresa:any){
    this.regionVisible='productos';
    this.ProductosComponent?.cargarProductos(empresa);
  }

  iraPedidos(){
    this.regionVisible='pedidos';
    this.PedidosComponent?.cargarPedidos();
  }

  iraMotoristas(){
    this.regionVisible='motoristas';
    this.MotoristasComponent?.cargarMotoristas();
  }

  logout(){
    this.usuarioActual='';
    this.regionVisible='login';
  }

}
