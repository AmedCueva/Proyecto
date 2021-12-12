import { EmpresasService } from './../services/empresas.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  @Output() onIrProductos = new EventEmitter();
  categoriaActual:any={
    _id: "",
    nombre: '',
    imagen: ''
  };
  empresas:any=[];

  constructor(private EmpresasService:EmpresasService) { }

  ngOnInit(): void {
    
  }

  verEmpresas(categoria: any){
    console.log('recibiendo:', categoria);
    this.categoriaActual = categoria;
    this.EmpresasService.obtenerEmpresas(this.categoriaActual._id).subscribe(res=>
      {
        console.log(res);
        this.empresas = res;
        console.log('empresas:',this.empresas);
      },  
      error=>{
        console.log(error)
      })     
  }

  verProductos(empresa:any){
    this.onIrProductos.emit(empresa);
  }

}
