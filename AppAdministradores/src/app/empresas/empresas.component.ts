import { CategoriasService } from './../services/categorias.service';
import { EmpresasService } from './../services/empresas.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {
  @Output() onAgregarProductos = new EventEmitter();
  empresas:any=[];
  categorias:any=[];

  empresaActual:any;

  formularioNueva = new FormGroup ({
    categoriaID: new FormControl ('', [Validators.required]),
    nombre: new FormControl ('', [Validators.required]),
    descripcion: new FormControl ('', [Validators.required]),
    direccion: new FormControl ('', [Validators.required]),
    telefono: new FormControl ('', [Validators.required])
  });

  formularioNuevoProducto = new FormGroup ({
    nombre: new FormControl ('', [Validators.required]),
    precio: new FormControl ('', [Validators.required]),
  });

  constructor(private modalService: NgbModal,
    private EmpresasService:EmpresasService,
    private CategoriasService:CategoriasService) { }

  ngOnInit(): void { 
  }

  cargarEmpresas(){
    this.EmpresasService.obtenerEmpresas().subscribe(res=>
      {
        this.empresas = res;
      },  
      error=>{
        console.log(error)
      })

      this.CategoriasService.obtenerCategorias().subscribe(res=>
        {
          this.categorias = res;
        },  
        error=>{
          console.log(error)
        })
  }

  nueva(modal: any){
    this.modalService.open(modal, {size: 'lg'});
  }

  agregarNueva(){
    let empresa = this.formularioNueva.value;
    this.EmpresasService.agregarEmpresa(empresa).subscribe(res=>
      {
        console.log(res);
      },  
      error=>{
        console.log(error)
      });
    this.modalService.dismissAll();
  }

  verProductos(modal:any, empresa:any){
    this.empresaActual = empresa;
    this.modalService.open(modal, {size: 'lg'});
  }

  nuevoProducto(modal:any){
    this.modalService.dismissAll();
    this.modalService.open(modal, {size: 'lg'});
  }

  agregarProducto(){
    let producto = this.formularioNuevoProducto.value;
    console.log(producto);

    this.EmpresasService.agregarProducto(this.empresaActual, producto).subscribe(res=>
      {
        console.log(res);
      },  
      error=>{
        console.log(error)
      });


    this.modalService.dismissAll();
    this.onAgregarProductos.emit();
  }

}
