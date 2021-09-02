import { Injectable } from '@angular/core';
import { Social } from '../../models/Social';

@Injectable({
  providedIn: 'root'
})
export class SocialNetworksService {

  items : Social[];
  
  constructor() {
    this.items = [
      {icon: "fa fa-facebook",  url: "https://www.facebook.com/Faastxapp"},
      {icon: "fa fa-instagram", url: "https://www.instagram.com/_faastx/"},
      {icon: "fa fa-envelope",  url: "mailto:hola@faastx.com"},
      {icon: "fa fa-apple",     url: "https://apps.apple.com/us/app/faastx-mercado/id1479666755"},
      {icon: "fa fa-android",   url: "https://play.google.com/store/apps/details?id=com.faastx.user&hl=es_MX&gl=US"}
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
