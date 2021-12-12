import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotoristasService {

  constructor(private httpClient: HttpClient) { }

  obtenerMotoristas(){
    return this.httpClient.get(`http://localhost:8888/motoristas/`, {});
  }

  obtener1Motorista(usuario: any){
    return this.httpClient.get(`http://localhost:8888/motoristas/${usuario}`, {});
  } 

  editarMotorista(motorista:any){
    return this.httpClient.put(`http://localhost:8888/motoristas/${motorista._id}`, {
            nombre: motorista.nombre,
            email: motorista.email,
            telefono: motorista.telefono,
            user: motorista.user,
            password: motorista.password,
            placa: motorista.placa,
            estado: motorista.estado,
    });
  }
}
