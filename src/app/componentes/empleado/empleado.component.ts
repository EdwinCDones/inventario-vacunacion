import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServicioService } from 'src/app/servicio/servicio.service';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private service: ServicioService) { }

  ngOnInit(): void {
    
  }
  
}
