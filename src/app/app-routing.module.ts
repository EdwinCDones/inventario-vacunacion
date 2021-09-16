import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './componentes/empleado/empleado.component';
import { AdministrativoComponent } from './componentes/administrativo/administrativo.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { UserGuardGuard } from './user-guard.guard';

const routes: Routes = [
  { path: 'home', canActivate: [UserGuardGuard], component: AppComponent },
  { path: 'empleado', component: EmpleadoComponent, canActivate: [UserGuardGuard] },
  { path: 'administrativo', canActivate: [UserGuardGuard], component: AdministrativoComponent },
  { path: 'login', component: LoginComponent },
  //{path: '**', component: AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
