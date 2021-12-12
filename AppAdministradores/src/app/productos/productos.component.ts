import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
  empresaActual:any;

  constructor() { }

  ngOnInit(): void {
  }

  cargarProductos(empresa:any){
    this.empresaActual = empresa;
  }
}
