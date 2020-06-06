import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/producto';
import { ConexcionService } from 'src/app/services/conexcion.service';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  productos: Producto[];

  constructor( private _conexion: ConexcionService ) {
    this._conexion.listaProductos().subscribe( lista => {
      this.productos = lista;
    } );
  }

  ngOnInit(): void {
  }

}
