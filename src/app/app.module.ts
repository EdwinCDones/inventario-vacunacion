import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { AdministrativoComponent } from './componentes/administrativo/administrativo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicioService } from './servicio/servicio.service';


@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    AdministrativoComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [ServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
