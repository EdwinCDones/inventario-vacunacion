import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  public url: string = 'http://localhost:8080';
  public empleados:string = '/empleados';
  public empleado:string = '/empleado';
  public eliminarEmpleado:string = '/eliminarEmpleado';
  public slash:string = '/';

  constructor(protected httpClient: HttpClient,
    private router: Router) {

  }

  getEmpleados(): Observable<any> {
    return this.httpClient.get(`${this.url}${this.empleados}`);
  }

  eliminarEmpleados(id:string): Observable<any> {
    return this.httpClient.get(`${this.url}${this.eliminarEmpleado}${this.slash}${id}`);
  }

  actualizarEmpleados(id:string, obj: any): Observable<any> {
    return this.httpClient.put(`${this.url}${this.empleado}${this.slash}${id}`, obj);
  }

  registrarEmpleado(obj: any): Observable<any> {
    return this.httpClient.post(`${this.url}${this.empleado}`, obj);
  }

}
