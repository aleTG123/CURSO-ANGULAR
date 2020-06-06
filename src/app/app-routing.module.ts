import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { AdministradorComponent } from './components/administrador/administrador.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './guards/auth.guard';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'administrador', component: AdministradorComponent, canActivate: [ AuthGuard ] },
  { path: 'usuario', component: UsuarioComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'login' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
