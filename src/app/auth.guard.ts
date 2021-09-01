import { Injectable } from '@angular/core';
// import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CanActivate } from '@angular/router';
// import { Observable } from 'rxjs';
import { LoginService } from "./services/login/login.service";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private loginService : LoginService,
    private router : Router
    ){
    
  }

  // PREGUNTA SI EL USUARIO ESTA LOGUEADO.
  canActivate():boolean{
    // SI ESTA LOGUEADO DEJARLO PASAR.
    if(this.loginService.ServiceLoggedIn()){
      return true;
    }

    // SI NO ESTA LOGUEADO REDIRECCIONARLO AL LOGIN.
    this.router.navigate(['/ingresar']);
    return false;
  }
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
  
}
