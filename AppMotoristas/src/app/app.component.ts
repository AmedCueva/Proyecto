import { PerfilComponent } from './perfil/perfil.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { HomeComponent } from './home/home.component';
import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppMotoristas';

  regionVisible:any='login';

  usuarioActual:any='';

  @ViewChild('pedidos') PedidosComponent:PedidosComponent | undefined;
  @ViewChild('perfil') PerfilComponent:PerfilComponent | undefined;
  @ViewChild('home') HomeComponent:HomeComponent | undefined;
  
  //OPCIONES DE CAMBIO DE COMPONENTE
  registrar(){
    this.regionVisible = 'registro';
  }

  login(res:any){
    if(res != null){
      if(res.estado == "Activo"){
        console.log('activo');
        this.usuarioActual = res;
        console.log('Usuario Actual:', this.usuarioActual)
      }
      else{
        console.log('Pronto se activara tu cuenta');
      }
    }
    
    if(this.usuarioActual != ""){
      this.regionVisible = 'home'; 
    }
    else{
      this.regionVisible = 'login';
    }
  }

  iraHome(){
    this.regionVisible = 'home';
    this.HomeComponent?.obtenerPedidos();
  }

  iraPedidos(){
    this.regionVisible = 'pedidos';
    this.PedidosComponent?.verPedidos(this.usuarioActual);
  }

  iraHistorial(){
    this.regionVisible = 'historial';
  }

  iraPerfil(){
    this.regionVisible = 'perfil';
    this.PerfilComponent?.verPerfil(this.usuarioActual);
  }

  logout(){
    this.regionVisible = 'login';
    this.usuarioActual = '';
  }

  tomarPedido(pedido:any){
    console.log("Tomo el Pedido:",pedido);
    console.log("el usuario:",this.usuarioActual);

    this.HomeComponent?.asignarPedido(pedido, this.usuarioActual);
  }

}
