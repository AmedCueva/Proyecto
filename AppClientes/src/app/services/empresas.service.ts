import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private httpClient: HttpClient) { }

  obtenerEmpresas(categoriaID: any){
    return this.httpClient.get(`http://localhost:8888/empresas/${categoriaID}/empresas`, {});
  } 

  obtener1Empresa(empresaID: any){
    return this.httpClient.get(`http://localhost:8888/empresas/${empresaID}`, {});
  }
}
