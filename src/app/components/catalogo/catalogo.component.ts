import { Component, OnInit } from '@angular/core';
import { ConexcionService } from 'src/app/services/conexcion.service';
import { Producto } from 'src/app/interfaces/producto';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {
  
  productos: Producto[];

  producto: Producto = {
    id: '',
    nombre: '',
    marca: '',
    precio: ''
  };

  constructor( private _conexion: ConexcionService ) {
    this._conexion.listaProductos().subscribe( data => {
      console.log(data);
      this.productos= data;
    } );
  }

  ngOnInit(): void {
    
  }

  eliminar( producto: Producto ){
    this._conexion.eliminarProducto( producto );
  }

  editar( producto: Producto ) {

    this.producto = producto;


  }

}
