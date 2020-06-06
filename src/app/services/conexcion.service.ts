import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Producto } from '../interfaces/producto';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ConexcionService {

  private productosCollection: AngularFirestoreCollection<Producto>;
  private productosDoc: AngularFirestoreDocument<Producto>;
  private producto: Producto;

  productos: Observable<Producto[]>;
  

  constructor( private _afs: AngularFirestore ) {


    this.productosCollection = this._afs.collection<Producto>( 'Productos' );  
    // this.productos = this.productosCollection.valueChanges();
    this.productos = this.productosCollection.snapshotChanges().pipe(
        map( actions => {
            return actions.map( action => {

              this.producto =  action.payload.doc.data();
              //const data = action.payload.doc.data();
              this.producto.id= action.payload.doc.id;
              //const id= action.payload.doc.id;
              
              return this.producto;
            })
        } )
     );
    

  }

  listaProductos() {

    return this.productos;
  
  }


  agregarProducto( producto: Producto ){

    this.productosCollection.add( producto );
  
  }


  eliminarProducto( producto: Producto ) {

    this.productosDoc= this._afs.doc<Producto>(`Productos/${ producto.id }`);
    this.productosDoc.delete();

  }


  editarProducto( producto: Producto ){

    this.productosDoc = this._afs.doc<Producto>(`Productos/${ producto.id }`);
    this.productosDoc.update(producto);

  }

  



}
