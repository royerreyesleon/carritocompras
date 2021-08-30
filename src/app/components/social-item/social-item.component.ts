import { Component, Input, OnInit } from '@angular/core';
import { Social } from '../../models/Social';
import { SocialNetworksService } from '../../services/social-networks/social-networks.service';

@Component({
  selector: 'app-social-item',
  templateUrl: './social-item.component.html',
  styleUrls: ['./social-item.component.css']
})
export class SocialItemComponent implements OnInit {

  @Input() items!: Social[];

  constructor(public itemService: SocialNetworksService) { }

  ngOnInit(): void {

    this.items = this.itemService.serviceGetItems();
    // console.log(this.items);
    
  }

}
