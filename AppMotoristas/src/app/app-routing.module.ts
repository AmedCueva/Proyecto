import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from './historial/historial.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  //{ path: '', component: LoginComponent },
  //{ path: 'registro', component: RegistroComponent },
  //{ path: 'home', component: HomeComponent },
  //{ path: 'pedidos', component: PedidosComponent },
  //{ path: 'perfil', component: PerfilComponent },
  //{ path: 'historial', component: HistorialComponent },
//
  //// para redireccionar a login
  //{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
