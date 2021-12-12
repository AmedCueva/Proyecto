import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private httpClient: HttpClient) { }

  obtenerCategorias(){
    return this.httpClient.get(`http://localhost:8888/categorias/`, {});
  }
}
