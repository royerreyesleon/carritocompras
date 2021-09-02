import { Component, OnInit } from '@angular/core';
// import {IvyCarouselModule} from 'angular-responsive-carousel';


@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})

export class SlideshowComponent implements OnInit {

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  constructor() { }
  ngOnInit(): void {

  }

}
/* import { Component } from '@angular/core';
@Component({selector: 'app-slideshow', templateUrl: './slideshow.component.html'})
export class SlideshowComponent {
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
} */