import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { LoginService } from "../login/login.service";

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(
    private  loginService: LoginService
  ) { }
  
  // EN CADA PETICION MANDA EL HEADER CON EL TOKEN DE AUTORIZACION.
  intercept(req: { clone: (arg0: { setHeader: { Authorization: string; }; }) => any; }, next: { handle: (arg0: any) => any; }){
    // ADD PLUS HEADERS
    const tokenizeReq = req.clone({
      setHeader:{
        Authorization : `Bearer ${this.loginService.ServiceGetToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }
}
