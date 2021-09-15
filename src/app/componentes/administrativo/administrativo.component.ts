import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Employee } from 'src/app/models/employee';
import { ServicioService } from 'src/app/servicio/servicio.service';

@Component({
  selector: 'app-administrativo',
  templateUrl: './administrativo.component.html',
  styleUrls: ['./administrativo.component.css']
})
export class AdministrativoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service: ServicioService) { }

  ngOnInit(): void {
    this.getEmpleados();
  }
  empleados: Employee[] = [

  ];

  selectedEmployee: Employee = { id: 0, nombre: '', apellido: '', cedula: '', correo: '', usuario: '', password: '' };

  openForEdit(employee: Employee): void {
    this.selectedEmployee = { id: employee.id, nombre: employee.nombre, 
      apellido: employee.apellido, 
      cedula: employee.cedula, 
      correo: employee.correo, 
      usuario: employee.usuario,
      password: employee.password };
  }

  addOrEdit(): void {
    if (this.validarFormulario(this.selectedEmployee)) {
      if (this.selectedEmployee.id === 0) // INSERT
      {
        this.registraEmpleado();
      } else {
        this.actualizarEmpleado();
      }
    }

  }

  delete(): void {
    if (confirm('Estas seguro de eliminar este registro?')) {
      this.empleados = this.empleados.filter(x => x != this.selectedEmployee);
      this.selectedEmployee = { id: 0, nombre: '', apellido: '', cedula: '', correo: '', usuario: '', password: '' };
    }
  }

  getEmpleados() {
    this.service.getEmpleados().subscribe(result => {
      console.log(result);
      this.empleados = result;
    }, error => {
      console.log("Ha ocurrido un error {}", error);
    });
  }

  registraEmpleado() {
    this.service.registrarEmpleado(this.selectedEmployee).subscribe(result => {
      this.getEmpleados();
      this.resetEmpleado();
    });
  }

  actualizarEmpleado() {
    this.service.actualizarEmpleados(this.selectedEmployee.id + "", this.selectedEmployee).subscribe(result => {
      this.getEmpleados();
      this.resetEmpleado();
    });
  }

  eliminarEmpleado(empleado: Employee) {
    this.service.eliminarEmpleados(empleado.id + "").subscribe(result => {
      this.getEmpleados();
    });
  }

  resetEmpleado() {
    this.selectedEmployee = { id: 0, nombre: '', apellido: '', cedula: '', correo: '', usuario: '', password: '' };
  }

  validarFormulario(employee: Employee) {
    let mensaje = ""
    let isvalido = true;
    if (employee.nombre === '') {
      isvalido = false;
      mensaje += "El nombre es requerido \n";
    }

    if (employee.apellido === '') {
      isvalido = false;
      mensaje += "El apellido es requerido \n";
    }

    if (employee.cedula === '') {
      isvalido = false;
      mensaje += "La cédula es requerido \n";
    }

    if (employee.correo === '') {
      isvalido = false;
      mensaje += "El correo es requerido \n";
    }
    

    if (!isvalido) {
      alert(mensaje);
    }

    return isvalido;
  }
}

