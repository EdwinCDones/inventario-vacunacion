import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';
import { ServicioService } from 'src/app/servicio/servicio.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User = {usuario:'', password:''}

  constructor(private service: ServicioService, private router: Router) { }

  ngOnInit(): void {
  }

  iniciarSesion(){
    console.log("Entra a la funcion");
    
    this.service.iniciarSesionService(this.user).subscribe(result => {
      if(this.service.iniciarSession(result)){
        if(result.rol === 'empleado'){
          this.router.navigate(['empleado']);
        }else{
          this.router.navigate(['administrativo']);
        }
      } else {
        alert("El usuario o contraseña es erronea");
      }
    }, error => {
      alert("El usuario o contraseña es erronea");
    });
  }

}
