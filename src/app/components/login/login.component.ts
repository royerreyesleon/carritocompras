import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2'
import { LoginService } from '../../services/login/login.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private itemService: LoginService,
    private router:Router
    ) { }

  ngOnInit(): void {

    // SI EL USUARIO YA ESTA LOGGEADO REDIRIGIR AL DASHBOARD.
    if(this.itemService.ServiceLoggedIn()){
      this.router.navigate(['/admin']);
    }
  }

  loginSubmit(lUser : any, lPass: any){

    if(lUser.value == 'admin' && lPass.value == 'admin'){
    
      this.itemService.ServiceLogin();
      Swal.fire(
        'OK!',
        'Ahora puede administrar el sistema!',
        'success'
      );
      lUser.value = '';
      lPass.value = '';  
      this.router.navigate(['/admin']);
    
    }else{
    
      Swal.fire(
        'INCORRECTO!',
        'Usuario o Contraseña incorrecto!',
        'error'
      );
    
    }      
    
    return false;
  }


}
