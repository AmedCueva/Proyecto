import { MotoristasService } from './../services/motoristas.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onIrRegistro = new EventEmitter();
  @Output() onLogin = new EventEmitter();
  a = "";
  mensaje="";

  formularioLogin = new FormGroup ({
    user: new FormControl ('', [Validators.required]),
    pass: new FormControl ('', [Validators.required])
  });

  constructor(private MotoristasService:MotoristasService) { }

  ngOnInit(): void {
  } 

  irRegistro(){
    this.onIrRegistro.emit();
  }

  login(){
    this.mensaje = '';
    this.MotoristasService.obtener1Motorista(this.formularioLogin.get('user')?.value, this.formularioLogin.get('pass')?.value).subscribe(res=>
      {
        this.onLogin.emit(res);
        if(res != null){
          if(res.estado != "Activo"){
            this.mensaje = 'Pronto se Activara tu Cuenta';
          }
        }
        
      },  
      error=>{
        console.log(error)
        this.onLogin.emit(this.a);
      })
  }

}
