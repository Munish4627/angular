import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  slides: any = [
    { id: 1, img: 'assets/img/slider1.jpg' },
    { id: 2, img: 'assets/img/slider2.jpg' },
    { id: 3, img: 'assets/img/slider3.jpg' },
    { id: 4, img: 'assets/img/slider4.jpg' },
    { id: 5, img: 'assets/img/slider5.jpg' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
