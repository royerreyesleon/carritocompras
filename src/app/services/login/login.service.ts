import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  ServiceLogin(lUser:any, lPass:any){

    if(lUser == 'admin' && lPass == 'admin'){
      localStorage.setItem('login', '1');
    }
  }
  
  ServiceLogout(){
    localStorage.removeItem('login');
  }

  ServiceLoggedIn():Boolean {
    return !!localStorage.getItem('login');
  }

}
