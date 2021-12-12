import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  @Output() onIrLogin = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  irLogin(){
    this.onIrLogin.emit();
  }

}
