import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router:Router) { }

  // INICIAR SESION.
  ServiceLogin(){
    localStorage.setItem('login', '1');
  }
  
  // CERRAR SESION.
  ServiceLogout(){
    localStorage.removeItem('login');
    this.router.navigate(['/ingresar'])
  }

  // DEVUELVE TUR SI EL USUARIO ESTA LOGUEADO Y FALSO SI NO LO ESTA.
  ServiceLoggedIn():Boolean {
    return !!localStorage.getItem('login');
  }

  // OBTENER EL TOKEN.
  ServiceGetToken(){
    return localStorage.getItem('login');
  }

}
