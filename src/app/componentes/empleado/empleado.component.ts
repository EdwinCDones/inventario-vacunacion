import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee';
import { ServicioService } from 'src/app/servicio/servicio.service';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service: ServicioService, private router: Router) { }

  empleado: Employee = { id: 0, nombre: '', apellido: '', cedula: '', correo: '', usuario: '', password: '', rol:'' };


  ngOnInit(): void {
    this.empleado = this.service.obtenerUsuario();
    console.log(this.empleado);
    
  }

  cerrarSesion(){
    this.service.cerrarSession();
    this.router.navigate(['login']);
  }
  
}
