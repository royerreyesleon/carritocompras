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
    if(this.itemService.ServiceLoggedIn()){
      this.router.navigate(['/admin']);
    }
  }


  loginSubmit(lUser : any, lPass: any){
    
      console.log(lUser.value);
      console.log(lPass.value);

      this.itemService.ServiceLogin(lUser.value, lPass.value);

      this.router.navigate(['/admin']);
      
      // lUser.value = '';
      // lPass.value = '';
  
  
      Swal.fire(
        'OK!',
        'Ahora puede administrar el sistema!',
        'success'
      );
  
      return false;
  }


}
