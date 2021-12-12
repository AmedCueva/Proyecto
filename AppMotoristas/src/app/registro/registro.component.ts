import { MotoristasService } from './../services/motoristas.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  @Output() onIrLogin = new EventEmitter();

  formularioRegistro = new FormGroup ({ 
    user: new FormControl ('', [Validators.required]),
    password: new FormControl ('', [Validators.required]),
    nombre: new FormControl ('', [Validators.required]),
    telefono: new FormControl ('', [Validators.required]),
    email: new FormControl ('', [Validators.required]),
    placa: new FormControl ('', [Validators.required])
  });

  constructor(private MotoristasService:MotoristasService) { }

  ngOnInit(): void {
  }

  guardar(){
    let usuario = {
      nombre: this.formularioRegistro.get('nombre')?.value,
      telefono: this.formularioRegistro.get('telefono')?.value,
      email: this.formularioRegistro.get('email')?.value,
      user: this.formularioRegistro.get('user')?.value,
      password: this.formularioRegistro.get('password')?.value,
      placa: this.formularioRegistro.get('placa')?.value
    }
    this.MotoristasService.agregarMotorista(usuario).subscribe(res=>
      {
        console.log(res);
      },  
      error=>{
        console.log(error)
      }) ;
    
    this.onIrLogin.emit();
  }

  regresar(){
    this.onIrLogin.emit();
  }

}
