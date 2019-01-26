import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';





@IonicPage()
@Component({
  selector: 'page-first',
  templateUrl: 'first.html',
})
export class FirstPage {
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
    var jon = ((parseInt(this.course1) * 3) + (parseInt(this.course2) * 2) + (parseInt(this.course3) * 2) +
      (parseInt(this.course4) * 3) + (parseInt(this.course5) * 3) + (parseInt(this.course6) * 2) +
      (parseInt(this.course7) * 3) + (parseInt(this.course8) * 1) + (parseInt(this.course9) * 2)) ;
    var fav = jon / 21;
    this.mine = jon;
    var jons = fav.toFixed(2);
    this.ife = jons;
    
  }
  answer2() {
    var jone = ((parseInt(this.course10) * 2) + (parseInt(this.course11) * 1) + (parseInt(this.course12) * 2) +
      (parseInt(this.course13) * 2) + (parseInt(this.course14) * 3) + (parseInt(this.course15) * 3) +
      (parseInt(this.course16) * 2) + (parseInt(this.course17) * 3) + (parseInt(this.course18) * 1) + (parseInt(this.course19) * 2)) ;
    var favs = jone / 21;
    var jones = favs.toFixed(2);
    this.ifed = jones;
    this.total = ((this.mine + jone) / 42).toFixed(2);

  }

  
}
