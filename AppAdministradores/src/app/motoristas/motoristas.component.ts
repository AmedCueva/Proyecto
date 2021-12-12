import { MotoristasService } from './../services/motoristas.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-motoristas',
  templateUrl: './motoristas.component.html',
  styleUrls: ['./motoristas.component.css']
})
export class MotoristasComponent implements OnInit {
  @Output() onEditar0 = new EventEmitter();
  @Output() onEditar = new EventEmitter();
  motoristas:any;
  motActual:any;
  nuevoEstado:any;

  constructor(private MotoristasService:MotoristasService) { }

  ngOnInit(): void {
  }

  cargarMotoristas(){
    this.MotoristasService.obtenerMotoristas().subscribe(res=>
      {
        this.motoristas = res;
      },  
      error=>{
        console.log(error)
      })
  }

  cambiarEstado(motorista:any){
    this.motActual=motorista;
    console.log("M Actual:", this.motActual)

    if(this.motActual.estado == "Activo"){
      this.nuevoEstado = "Inactivo";
    }
    else{
      this.nuevoEstado = "Activo";
    }

    this.motActual.estado=this.nuevoEstado;

    this.MotoristasService.editarMotorista(this.motActual).subscribe(res=>
      {
        console.log(res);
      },  
      error=>{
        console.log(error)
      })

      console.log("MActual", this.motActual)
      
      this.onEditar0.emit();
      this.onEditar.emit();
    
  }

}
