import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  constructor(private httpClient: HttpClient) { }

  obtenerEmpresas(){
    return this.httpClient.get(`http://localhost:8888/empresas/`, {});
  }

  agregarEmpresa(empresa:any){
    return this.httpClient.post(`http://localhost:8888/empresas/`, {
        idcategoria: empresa.categoriaID,
        nombre: empresa.nombre,
        descripcion: empresa.descripcion,
        direccion: empresa.direccion,
        telefono: empresa.telefono
    });
  }

  agregarProducto(empresa:any, producto:any){
    return this.httpClient.post(`http://localhost:8888/empresas/${empresa._id}`, {
        nombre: producto.nombre,
        precio: producto.precio
    });
  }
}
