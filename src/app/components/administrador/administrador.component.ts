import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {

  wantAdd: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }


  isAgregar( want: boolean ){
    this.wantAdd= want;
  }

}
