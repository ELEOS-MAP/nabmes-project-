import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';

/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {
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
  course10: string;
  course11: string;
  ife: string;

  course12: string;
  course13: string;
  course14: string;
  course15: string;
  course16: string;
  course17: string;
  course18: string;
  course19: string;
  course20: string;
  course21: string;
  course22: string;
  ifed: string;

  total: string;
  mine: number;


  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.tabs = [
      { title: '1st Semester', icon: 'book' }, { title: '2nd Semester', icon: 'book' }, { title: 'cgpa', icon: 'list-box' }
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
    var jon = ((parseInt(this.course1) * 2) + (parseInt(this.course2) * 3) +
      (parseInt(this.course3) * 2) + (parseInt(this.course4) * 2)
      + (parseInt(this.course5) * 3) + (parseInt(this.course6) * 3)
      +(parseInt(this.course7) * 3) + (parseInt(this.course8) * 1) 
      + (parseInt(this.course9) * 2) + (parseInt(this.course10) * 2) +
      (parseInt(this.course11) * 2));
    var fav = jon / 25;
    this.mine = jon;
    var jons = fav.toFixed(2);
    this.ife = jons;

  }
  answer2() {
    var jone = ((parseInt(this.course12) * 2) + (parseInt(this.course13) * 2) +
      (parseInt(this.course14) * 2) + (parseInt(this.course15) * 3)  +
      (parseInt(this.course16) * 3) + (parseInt(this.course17) * 3) +
      (parseInt(this.course18) * 3) + (parseInt(this.course19) * 2)+
      (parseInt(this.course20) * 2) + (parseInt(this.course21) * 2) +
      (parseInt(this.course22) * 2));
    var favs = jone / 26;
    var jones = favs.toFixed(2);
    this.ifed = jones;
    this.total = ((this.mine + jone) / 51).toFixed(2);
  }
}
