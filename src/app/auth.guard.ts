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

  canActivate():boolean{
    if(this.loginService.ServiceLoggedIn()){
      return true;
    }

    this.router.navigate(['/ingresar']);
    return false;
  }
    // route: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // return true;
  
}
