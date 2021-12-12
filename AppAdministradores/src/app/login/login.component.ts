import { AdministradoresService } from './../services/administradores.service';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Output() onLogin = new EventEmitter();
  a = "";
  mensaje="";

  formularioLogin = new FormGroup ({
    user: new FormControl ('', [Validators.required]),
    pass: new FormControl ('', [Validators.required])
  });

  constructor(private AdministradoresService:AdministradoresService) { }

  ngOnInit(): void {
  }

  login(){
    console.log("login");
    this.AdministradoresService.obtener1Administrador(this.formularioLogin.get('user')?.value, this.formularioLogin.get('pass')?.value).subscribe(res=>
      {
        console.log(res);
        if (res != null){
          this.onLogin.emit(res); 
        }
      },  
      error=>{
        console.log(error)
        //this.onLogin.emit(this.a);
      })
  }

}
