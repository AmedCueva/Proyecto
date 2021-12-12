import { MenuComponent } from './menu/menu.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProductosComponent } from './productos/productos.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppClientes';
  @ViewChild('empresas') empresasComponent: EmpresasComponent | undefined; 
  @ViewChild('productos') ProductosComponent: ProductosComponent | undefined;
  @ViewChild('perfil') PerfilComponent:PerfilComponent | undefined;
  @ViewChild('pedidos') PedidosComponent:PedidosComponent | undefined;
  @ViewChild('carrito') CarritoComponent:CarritoComponent | undefined;
  @ViewChild('menu') MenuComponent:MenuComponent | undefined;

  regionVisible = 'landing';

  carrito:any={
    empresa: '',
    products: [],
    subtotal: 0,
    isv: 0,
    comision: 0,
    total: 0,
  }

  usuarioActual:any = '';
  categoriaActual={
    _id: "",
    nombre: '',
    imagen: ''
  };

  //OPCIONES DE CAMBIO DE COMPONENTE
  iraRegistro(){
    this.regionVisible = 'registro';
  }

  login(res:any){
    if(res != null){
      this.usuarioActual = res;
      console.log('Usuario Actual:', this.usuarioActual)
    }
    
    if(this.usuarioActual != ""){
      this.regionVisible = 'home';
    }
    else{
      this.regionVisible = 'login';
    }
  }

  iraLogin(){
    this.regionVisible = 'login';
  }

  iraHome(){
    this.regionVisible = 'home';
  }

  iraPedidos(){
    this.regionVisible = 'pedidos';
    this.PedidosComponent?.verPedidos(this.usuarioActual._id);
  }

  iraHistorial(){
    this.regionVisible = 'historial';
  }

  iraPerfil(){
    this.regionVisible = 'perfil';
    this.PerfilComponent?.verPerfil(this.usuarioActual);
  }

  iraCarrito(){
    this.regionVisible = 'carrito';
    this.CarritoComponent.verCarrito(this.carrito);
  }

  iraEmpresas(categoria: any){
    this.regionVisible = 'empresas';
    this.categoriaActual = categoria;
    console.log('categoria:', this.categoriaActual);
    this.empresasComponent?.verEmpresas(categoria);
  }

  iraProductos(empresa:any){
    this.regionVisible = 'productos';
    this.ProductosComponent?.verProductos(empresa);
  }

  logout(){
    this.regionVisible = 'login';
    this.usuarioActual = '';
  }

  irCarro(carro:any){
    this.carrito = carro;
    console.log('Carrito en APPComponent', this.carrito);
    this.MenuComponent.contar(this.carrito.products.length);
  }

  procesarPedido(){
    this.CarritoComponent.agregar(this.usuarioActual);
    this.CarritoComponent.borrarCarrito();
    this.iraHome();
  }

}
