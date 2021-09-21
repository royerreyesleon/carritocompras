import { Injectable } from '@angular/core';
import { Social } from '../../models/Social';

@Injectable({
  providedIn: 'root'
})
export class SocialNetworksService {

  items : Social[];
  
  constructor() {
    this.items = [
      {icon: "fa fa-facebook",  url: "https://www.facebook.com/"},
      {icon: "fa fa-instagram", url: "https://www.instagram.com/"},
      {icon: "fa fa-envelope",  url: "https://mail.google.com/mail/"},
      {icon: "fa fa-apple",     url: "https://apps.apple.com/"},
      {icon: "fa fa-android",   url: "https://play.google.com/"}
    ]
  }

  serviceGetItems(){
    if(localStorage.getItem('social') === null){
      return this.items;
    }else{

      this.items = JSON.parse(localStorage.getItem('social')!);
      return this.items;
    }
  }

}
