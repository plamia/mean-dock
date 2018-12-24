import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  titles;
  constructor() {
    this.titles = {
      brand: 'Online Shop',
      home: 'Home',
      about: 'About',
      cart: 'Cart',
      registration: 'Registration'
    }

   }

  ngOnInit() {
  }

}
