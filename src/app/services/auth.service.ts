import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import * as firebase  from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuario: any = {};



  constructor( public _fireAuth: AngularFireAuth ) {

    this.usuario = {};
    console.log(this.usuario);



    this._fireAuth.authState.subscribe( user => {
        console.log(user);

        console.log(this.usuario);

        if(!user){
          this.usuario = {};
          return;
        }



        this.usuario.nombre = user.displayName;
        this.usuario.uid = user.uid;
        this.usuario.email = user.email;
        this.usuario.photoUrl = user.photoURL;


    });

  }

   async login(){

        const provide = new firebase.auth.GoogleAuthProvider();
        return await this._fireAuth.signInWithPopup( provide );
       
     // return this._fireAuth.signInWithPopup( new firebase.auth.GoogleAuthProvider());

  }
  
  logout(){
  
    this.usuario = {};
    this._fireAuth.signOut();
    console.log(this.usuario);
  
  }


  isLogged(){
    
    return this.usuario.uid ? true: false;

  }
}
