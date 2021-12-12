import { CategoriasService } from './../services/categorias.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Output() onIrEmpresas = new EventEmitter();
  categorias:any=[
    {
      _id: "",
      nombre: "",
      imagen: ""
    }
  ];
  categoriaActual:any=[];

  constructor(private CategoriasService: CategoriasService) { }

  ngOnInit(): void {
    this.CategoriasService.obtenerCategorias().subscribe(res=>
      {
        console.log(res);
        this.categorias = res;
      },  
      error=>{
        console.log(error)
      })     
  }

  verEmpresas(categoria:any){
    this.categoriaActual=categoria;
    this.onIrEmpresas.emit(this.categoriaActual);
  }
}