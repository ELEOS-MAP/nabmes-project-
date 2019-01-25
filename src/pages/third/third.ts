import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the ThirdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-third',
  templateUrl: 'third.html',
})
export class ThirdPage {

  @ViewChild('SwipedTabsSlider') SwipedTabsSlider: Slides;
  SwipedTabsIndicator: any = null;
  tabs: any = [];
  course1: string;
  course2: string;
  course3: string;
  course4: string;
  course5: string;
  course6: string;
  course7: string;
  course8: string;
  course9: string;
  ife: string;
  course10: string;
  course11: string;
  course12: string;
  course13: string;
  course14: string;
  course15: string;
  course16: string;
  course17: string;
  course18: string;
  course19: string;
  ifed: string;

  total: string;
  mine: number;
  course20: string;
  course21: string;
  course22: string;
  courseb: string;
  coursea: string;
  unit1: any;
  grade1: any;
  gpcarry: number;
  grade: any;
  unit2: any;
  grade2: any;
  unit3: any;
  grade3: any;
  unit4: any;
  grade4: any;
  unit: any;
  grade9: any;
  unit9: any;
  grade8: any;
  unit8: any;
  grade7: any;
  unit7: any;
  grade6: any;
  unit6: any;
  grade5: any;
  unit5: any;
  gpcarry2: number;
  war: number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tabs = [
      { title: '1st Semester', icon: 'book' }, { title: '2nd Semester', icon: 'book' }, { title: 'cgpa', icon: 'list-box' }
      // , { title: 'cgpa', icon: 'color-filter' }
    ];

  }
  ionViewDidEnter() {
    this.SwipedTabsIndicator = document.getElementById("indicator");
  }
  selectTab(index) {
    this.SwipedTabsIndicator.style.webkitTransform =
      'translate3d(' + (100 * index) + '%,0,0)';
    this.SwipedTabsSlider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
    if (this.SwipedTabsSlider.length() >
      this.SwipedTabsSlider.getActiveIndex()) {
      this.SwipedTabsIndicator.style.webkitTransform =
        'translate3d('
        + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
    }
  }

  animateIndicator($event) {
    if (this.SwipedTabsIndicator) {
      this.SwipedTabsIndicator.style.webkitTransform =
        'translate3d('
        + (($event.progress * (this.SwipedTabsSlider.length() - 1)));
    }
  }
  answer() {
    var jon = ((parseInt(this.course1) * 6) + (parseInt(this.course2) * 2) +
      (parseInt(this.course3) * 2) + (parseInt(this.course4) * 2)
      + (parseInt(this.course5) * 2) + (parseInt(this.course6) * 2)
      + (parseInt(this.course7) * 3) + (parseInt(this.course8) * 3)
      + (parseInt(this.course9) * 2) + 
      (parseInt(this.coursea) * 3) + (parseInt(this.courseb) * 3));
    var fav = jon / 30;
    this.mine = jon;
    var jons = fav.toFixed(2);
    this.ife = jons;

  }
  answer2() {
    var jone = ((parseInt(this.course11) * 2) + (parseInt(this.course12) * 1) +
      (parseInt(this.course13) * 2) +
      (parseInt(this.course14) * 2) + (parseInt(this.course15) * 3) +
      (parseInt(this.course16) * 3) + (parseInt(this.course17) * 2) +
      (parseInt(this.course18) * 3) + (parseInt(this.course19) * 3) +
      (parseInt(this.course20) * 3) );
    var favs = jone / 24;
    var jones = favs.toFixed(2);
    this.war = jone;
    this.ifed = jones;
    this.total = ((this.mine + jone) / 54).toFixed(2);
  }


  // carryover() {
  //   var carry = (this.unit1 * this.grade1) + (this.unit2 * this.grade2) + (this.unit3 * this.grade3) + (this.unit4 * this.grade4) + (this.unit * this.grade);
  //   this.gpcarry = carry;
  //   var af = this.gpcarry + this.mine;
  //   var asin = this.unit + this.unit1 + this.unit2 + this.unit3 + this.unit4;
  //   var ar = 30 + asin
  //   var firsttotal = (af / ar).toFixed(2);
  //   this.ife = firsttotal.toString();


  //   var carry2 = (this.unit5 * this.grade5) + (this.unit6 * this.grade6) + (this.unit7 * this.grade7) + (this.unit8 * this.grade8) + (this.unit9 * this.grade9);
  //   this.gpcarry2 = carry2;
  //   var af2 = this.gpcarry2 + this.war;
  //   var asin2 = this.unit5 + this.unit6 + this.unit7 + this.unit8 + this.unit9;
  //   var ar2 = 24 + asin2
  //   var secondtotal = (af2 / ar2).toFixed(2);
  //   this.ifed = secondtotal.toString();

  //   var tota = this.gpcarry + this.gpcarry2;
  //   var trims = asin + asin2 + 54;

  //   this.total = (tota / trims).toFixed(2);

  // }

}
