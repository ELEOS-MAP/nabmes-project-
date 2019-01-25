import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FirstPage } from '../first/first';
import { SecondPage } from '../second/second';
import { ThirdPage } from '../third/third';
import { FourthPage } from '../fourth/fourth';
import { FifthPage } from '../fifth/fifth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  first: any;
  second: any;
  third: any;
  fourth: any;
  fifth: any;
  constructor(public navCtrl: NavController) {
    this.first = FirstPage;
    this.second = SecondPage;
    this.third = ThirdPage;
    this.fourth = FourthPage;
    this.fifth = FifthPage;
  }

}

