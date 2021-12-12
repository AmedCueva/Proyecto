import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdministradoresService {

  constructor(private httpClient: HttpClient) { }

  obtener1Administrador(usuario: any, pass: any):Observable<any>{
    return this.httpClient.get(`http://localhost:8888/administradores/${usuario}/${pass}`, {});
  } 
}
