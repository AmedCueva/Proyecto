import { ClientesService } from './../services/clientes.service';
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

  formularioLogin = new FormGroup ({
    user: new FormControl ('', [Validators.required]),
    pass: new FormControl ('', [Validators.required])
  });

  constructor(private ClientesService: ClientesService) { }

  ngOnInit(): void {
  }

  irRegistro(){
    this.onIrRegistro.emit();
  }

  login(){
    this.ClientesService.obtener1Cliente(this.formularioLogin.get('user')?.value, this.formularioLogin.get('pass')?.value).subscribe(res=>
      {
        console.log(res);
        this.onLogin.emit(res);
      },  
      error=>{
        console.log(error)
        this.onLogin.emit(this.a);
      })     
  }

}
