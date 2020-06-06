import { Component, OnInit, Input } from '@angular/core';
import { ConexcionService } from 'src/app/services/conexcion.service';
import { Producto } from 'src/app/interfaces/producto';
import { NgForm, ControlContainer } from '@angular/forms';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {

  @Input() isProductoNuevo: boolean = true;
  
  
  @Input() producto: Producto= {
    id: '',
    nombre: '',
    marca: '',
    precio: ''
  }

  constructor( private _conexion: ConexcionService ) {

  }

  ngOnInit(): void {
  }

  agregar( frm: NgForm ) {

    if ( frm.invalid ) {

      Object.values( frm.controls ).forEach( control => {
          if ( control.invalid) {
            control.markAsTouched();
          }
      });

      return;

    } else if( this.isProductoNuevo ) {
      
      this._conexion.agregarProducto( this.producto );
      this.limpiarProducto( frm );
    
    } else {

        this._conexion.editarProducto( this.producto );

    }
    
    
  }

  private limpiarProducto( frm: NgForm ){
      this.producto = {
        id: '',
        nombre: '',
        marca: '',
        precio: ''
      }

      Object.values( frm.controls ).forEach( control => {
          return control.markAsUntouched();
      } );
      
  }


  cancelar( frm: NgForm ) {
      Object.values( frm.controls ).forEach( control => {
          control.markAsUntouched();
      } );
  }


}
