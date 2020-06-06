import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';



import { CatalogoComponent } from './components/catalogo/catalogo.component';
import { AddProductoComponent } from './components/add-producto/add-producto.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { HomeComponent } from './component/home/home.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    AddProductoComponent,
    ListaProductosComponent,
    AdministradorComponent,
    UsuarioComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
