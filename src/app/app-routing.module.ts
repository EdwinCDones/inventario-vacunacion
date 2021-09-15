import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { AdministrativoComponent } from './componentes/administrativo/administrativo.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  {path: 'home', component: AppComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: 'administrativo', component: AdministrativoComponent},
  {path: 'login', component: LoginComponent},
  //{path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
