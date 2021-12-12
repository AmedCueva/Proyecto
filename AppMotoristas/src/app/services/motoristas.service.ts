import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {

  constructor(private httpClient: HttpClient) { }

  obtener1Motorista(usuario: any, pass: any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/motoristas/${usuario}/${pass}`, {});
  } 

  agregarMotorista(usuario:any):Observable<any>{
    return this.httpClient.post(`http://localhost:8888/motoristas/`, {
      nombre: usuario.nombre,
      email: usuario.email,
      telefono: usuario.telefono,
      user: usuario.user,
      password: usuario.password,
      placa: usuario.placa,
      estado: "Inactivo"
    });
  }

  editarMotorista(usuario:any, form:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/motoristas/${usuario._id}`, {
      nombre: form.nombre,
      email: form.email,
      telefono: form.telefono,
      user: form.user,
      password: form.password,
      placa: form.placa,
      estado: usuario.estado
    });
  }
}
