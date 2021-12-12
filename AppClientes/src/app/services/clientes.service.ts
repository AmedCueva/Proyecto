import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private httpClient: HttpClient) { }

  obtener1Cliente(usuario: any, pass: any){
    return this.httpClient.get(`http://localhost:8888/clientes/${usuario}/${pass}`, {});
  }
  
  agregarCliente(usuario:any):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/clientes/`, {
      nombre: usuario.nombre,
      telefono: usuario.telefono,
      email: usuario.email,
      user: usuario.user,
      password: usuario.password
    });
  }

  editarCliente(usuario:any, form:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/clientes/${usuario._id}`, {
      nombre: form.nombre,
      telefono: form.telefono,
      email: form.email,
      user: form.user,
      password: form.password
    });
  }

}
