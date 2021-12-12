import { MotoristasService } from './../services/motoristas.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  @Output() onEditar = new EventEmitter();
  usuario:any={
    nombre: '',
    telefono:'',
    email:'',
    user:'',
    password:'',
    placa: ''
  };
  formularioPerfil = new FormGroup ({
    user: new FormControl ('', [Validators.required]),
    password: new FormControl ('', [Validators.required]),
    nombre: new FormControl ('', [Validators.required]),
    telefono: new FormControl ('', [Validators.required]),
    email: new FormControl ('', [Validators.required]),
    placa: new FormControl ('', [Validators.required])
  });

  constructor(
    private modalService: NgbModal,
    private MotoristasService:MotoristasService
  ) { } 

  ngOnInit(): void {
  }

  verPerfil(usuario:any){
    this.usuario = usuario;
  }

  verDetalle(modal: any){
    this.modalService.open(modal, {size: 'lg'});
      this.formularioPerfil.get('nombre')?.setValue(this.usuario.nombre);
      this.formularioPerfil.get('telefono')?.setValue(this.usuario.telefono);
      this.formularioPerfil.get('email')?.setValue(this.usuario.email);
      this.formularioPerfil.get('user')?.setValue(this.usuario.user);
      this.formularioPerfil.get('password')?.setValue(this.usuario.password);
      this.formularioPerfil.get('placa')?.setValue(this.usuario.placa);
  }

  editarUsuario(){
    this.MotoristasService.editarMotorista(this.usuario ,this.formularioPerfil.value).subscribe(res=>
      {
        console.log(res);
      },  
      error=>{
        console.log(error)
      }) ;
      this.onEditar.emit();
      this.modalService.dismissAll();
  }

}
