import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresasComponent } from './empresas/empresas.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MotoristasComponent } from './motoristas/motoristas.component';
import { PedidosComponent } from './pedidos/pedidos.component';

const routes: Routes = [
  //{ path: '', component: LoginComponent },
  //{ path: 'home', component: HomeComponent },
  //{ path: 'pedidos', component: PedidosComponent },
  //{ path: 'empresas', component: EmpresasComponent },
  //{ path: 'motoristas', component: MotoristasComponent },
//
  //// para redireccionar a landing
  //{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
