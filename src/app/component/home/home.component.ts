import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("Nueva cambio");
    console.log("Cambio 2");
    console.log("Cambio dologin");
    console.log("Cmbio back");
    
  }

}
