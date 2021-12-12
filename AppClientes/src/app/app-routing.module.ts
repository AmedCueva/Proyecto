import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarritoComponent } from './carrito/carrito.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { HistorialComponent } from './historial/historial.component';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { ProductosComponent } from './productos/productos.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  //{ path: '', component: LandingComponent },
  //{ path: 'login', component: LoginComponent },
  //{ path: 'registro', component: RegistroComponent },
  //{ path: 'home', component: HomeComponent },
  //{ path: 'pedidos', component: PedidosComponent },
  //{ path: 'productos', component: ProductosComponent },
  //{ path: 'carrito', component: CarritoComponent },
  //{ path: 'perfil', component: PerfilComponent },
  //{ path: 'empresas', component: EmpresasComponent },
  //{ path: 'historial', component: HistorialComponent },
  // para redireccionar a landing
  //{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
