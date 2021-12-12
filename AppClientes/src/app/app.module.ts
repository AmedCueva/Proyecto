import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { LandingComponent } from './landing/landing.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CarritoComponent } from './carrito/carrito.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//ANGULAR MATERIAL
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ProductosComponent } from './productos/productos.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { EmpresasComponent } from './empresas/empresas.component';
import { HistorialComponent } from './historial/historial.component'; 
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    LandingComponent,
    PerfilComponent,
    CarritoComponent,
    PedidosComponent,
    ProductosComponent,
    MenuComponent,
    FooterComponent,
    EmpresasComponent,
    HistorialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
