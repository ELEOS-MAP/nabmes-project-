webpackJsonp([5],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FifthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FifthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FifthPage = /** @class */ (function () {
    function FifthPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SwipedTabsIndicator = null;
        this.tabs = [];
        this.tabs = [
            { title: '1st Semester', icon: 'book' }, { title: '2nd Semester', icon: 'book' }, { title: 'cgpa', icon: 'list-box' }
            // , { title: 'cgpa', icon: 'color-filter' }
        ];
    }
    FifthPage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    FifthPage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform =
            'translate3d(' + (100 * index) + '%,0,0)';
        this.SwipedTabsSlider.slideTo(index, 500);
    };
    FifthPage.prototype.updateIndicatorPosition = function () {
        if (this.SwipedTabsSlider.length() >
            this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform =
                'translate3d('
                    + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    FifthPage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator) {
            this.SwipedTabsIndicator.style.webkitTransform =
                'translate3d('
                    + (($event.progress * (this.SwipedTabsSlider.length() - 1)));
        }
    };
    FifthPage.prototype.answer = function () {
        var jon = ((parseInt(this.course1) * 3) + (parseInt(this.course2) * 1) +
            (parseInt(this.course3) * 3) + (parseInt(this.course4) * 3)
            + (parseInt(this.course5) * 4) + (parseInt(this.course6) * 3));
        var fav = jon / 17;
        this.mine = jon;
        var jons = fav.toFixed(2);
        this.ife = jons;
    };
    FifthPage.prototype.answer2 = function () {
        var jone = ((parseInt(this.course10) * 3) + (parseInt(this.course11) * 3) +
            (parseInt(this.course12) * 3) + (parseInt(this.course13) * 4) +
            (parseInt(this.course14) * 3) + (parseInt(this.course15) * 3));
        var favs = jone / 19;
        var jones = favs.toFixed(2);
        this.ifed = jones;
        this.total = ((this.mine + jone) / 51).toFixed(2);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], FifthPage.prototype, "SwipedTabsSlider", void 0);
    FifthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fifth',template:/*ion-inline-start:"/home/eleos/Desktop/mobileapp/nabmes/src/pages/fifth/fifth.html"*/'<!--\n  Generated template for the FifthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>500 LEVEL</ion-title>\n <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs;let i = index\' value="IgnoreMe" (click)="selectTab(i)" [ngClass]=\'{"SwipedTabs-activeTab":(this.SwipedTabsSlider\n                && (this.SwipedTabsSlider.getActiveIndex() === i || \n                (tabs.length -1 === i && this.SwipedTabsSlider.isEnd() )))}\'>\n                <ion-icon [name]="tab.icon"></ion-icon>\n            </ion-segment-button>\n        </ion-segment>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n\n\n    <!-- indicator -->\n    <div id="indicator" class="SwipedTabs-indicatorSegment"></div>\n\n    <ion-slides #SwipedTabsSlider \n    (ionSlideDrag)="animateIndicator($event)"(ionSlideWillChange)="updateIndicatorPosition()"\n    (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <!-- first semester -->\n        <ion-slide>\n        <ion-list padding>\n            <ion-item>\n                <ion-label>ABE501</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course1">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>ABE573</ion-label>\n                <ion-label>1units</ion-label>\n                <ion-select [(ngModel)]="course2">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME503</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course3">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME505</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course4">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME593</ion-label>\n                <ion-label>4units</ion-label>\n                <ion-select [(ngModel)]="course5">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>MEE551</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course6">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n        \n\n                <button ion-button (click)="answer()">Grade Point</button>\n                <ion-label>{{ife}}</ion-label>\n        </ion-list>\n\n        \n        </ion-slide>\n\n\n\n\n\n\n\n        <!-- second semester -->\n        <ion-slide>\n            \n            <ion-list>\n            <ion-item>\n                <ion-label>BME502</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course10">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME504</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course11">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME512</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course12">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME594</ion-label>\n                <ion-label>4units</ion-label>\n                <ion-select [(ngModel)]="course13">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BUL506</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course14">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>ELE506</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course15">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n           \n                <button ion-button (click)="answer2()">Grade Point</button>\n                <ion-label>{{ifed}}</ion-label>\n        </ion-list>\n\n        </ion-slide>\n\n\n       <!-- carry over courses      \n        <ion-slide>\n\n            <ion-title>FIRST SEMESTER</ion-title>\n            <ion-item>\n                <ion-label>COURSE 1</ion-label>\n                <ion-select [(ngModel)]="unit">\n                    <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>COURSE 2</ion-label>\n                <ion-select [(ngModel)]="unit1">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                \n                <ion-select [(ngModel)]="grade1">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>COURSE 3</ion-label>\n                <ion-select [(ngModel)]="unit2">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade2">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>COURSE 4</ion-label>\n                <ion-select [(ngModel)]="unit3">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade3">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>COURSE 5</ion-label>\n                <ion-select [(ngModel)]="unit4">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade4">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-title>SECOND SEMESTER</ion-title>\n\n            <ion-item>\n                <ion-label>COURSE 1</ion-label>\n                <ion-select [(ngModel)]="unit5">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade5">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>COURSE 2</ion-label>\n                <ion-select [(ngModel)]="unit6">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade6">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>COURSE 3</ion-label>\n                <ion-select [(ngModel)]="unit7">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade7">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>COURSE 4</ion-label>\n                <ion-select [(ngModel)]="unit8">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade8">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>COURSE 5</ion-label>\n                <ion-select [(ngModel)]="unit9">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade9">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <button ion-button full (click)="carryover()">ADD CARRY OVER COURSES</button>\n        </ion-slide> -->\n\n        <!-- cgpa -->\n        <ion-slide>\n\n            <ion-label>FIRST SEMESTER: {{ife}}</ion-label>\n            <ion-label>SECOND SEMESTER: {{ifed}}</ion-label>\n            <ion-label>CGPA: {{total}}</ion-label>\n\n\n        </ion-slide>   \n    </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/eleos/Desktop/mobileapp/nabmes/src/pages/fifth/fifth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FifthPage);
    return FifthPage;
}());

//# sourceMappingURL=fifth.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirstPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FirstPage = /** @class */ (function () {
    function FirstPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SwipedTabsIndicator = null;
        this.tabs = [];
        this.tabs = [
            { title: '1st Semester', icon: 'book' }, { title: '2nd Semester', icon: 'book' }, { title: 'cgpa', icon: 'list-box' }
        ];
    }
    FirstPage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    FirstPage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform =
            'translate3d(' + (100 * index) + '%,0,0)';
        this.SwipedTabsSlider.slideTo(index, 500);
    };
    FirstPage.prototype.updateIndicatorPosition = function () {
        if (this.SwipedTabsSlider.length() >
            this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform =
                'translate3d('
                    + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    FirstPage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator) {
            this.SwipedTabsIndicator.style.webkitTransform =
                'translate3d('
                    + (($event.progress * (this.SwipedTabsSlider.length() - 1)));
        }
    };
    FirstPage.prototype.answer = function () {
        var jon = ((parseInt(this.course1) * 3) + (parseInt(this.course2) * 2) + (parseInt(this.course3) * 2) +
            (parseInt(this.course4) * 3) + (parseInt(this.course5) * 3) + (parseInt(this.course6) * 2) +
            (parseInt(this.course7) * 3) + (parseInt(this.course8) * 1) + (parseInt(this.course9) * 2));
        var fav = jon / 21;
        this.mine = jon;
        var jons = fav.toFixed(2);
        this.ife = jons;
    };
    FirstPage.prototype.answer2 = function () {
        var jone = ((parseInt(this.course10) * 2) + (parseInt(this.course11) * 1) + (parseInt(this.course12) * 2) +
            (parseInt(this.course13) * 2) + (parseInt(this.course14) * 3) + (parseInt(this.course15) * 3) +
            (parseInt(this.course16) * 2) + (parseInt(this.course17) * 3) + (parseInt(this.course18) * 1) + (parseInt(this.course19) * 2));
        var favs = jone / 21;
        var jones = favs.toFixed(2);
        this.ifed = jones;
        this.total = ((this.mine + jone) / 42).toFixed(2);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], FirstPage.prototype, "SwipedTabsSlider", void 0);
    FirstPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-first',template:/*ion-inline-start:"/home/eleos/Desktop/mobileapp/nabmes/src/pages/first/first.html"*/'\n<ion-header>\n  <ion-navbar no-border-bottom color="primary">\n    <ion-title>100 LEVEL</ion-title>\n         <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs;let i = index\' value="IgnoreMe" (click)="selectTab(i)" [ngClass]=\'{"SwipedTabs-activeTab":(this.SwipedTabsSlider\n                && (this.SwipedTabsSlider.getActiveIndex() === i || \n                (tabs.length -1 === i && this.SwipedTabsSlider.isEnd() )))}\'>\n                <ion-icon [name]="tab.icon"></ion-icon>\n            </ion-segment-button>\n        </ion-segment>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n\n\n    <!-- indicator -->\n    <div id="indicator" class="SwipedTabs-indicatorSegment"></div>\n\n    <ion-slides #SwipedTabsSlider \n    (ionSlideDrag)="animateIndicator($event)"(ionSlideWillChange)="updateIndicatorPosition()"\n    (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <!-- first semester -->\n        <ion-slide>\n        <ion-list padding>\n            <ion-item>\n                <ion-label>CHM101</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course1">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>CHM115</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course2">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>GNS111</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course3">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>MAT111</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course4">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>MAT113</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course5">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>PHY115</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course6">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>PHY125</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course7">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>PHY191</ion-label>\n                <ion-label>1units</ion-label>\n                <ion-select [(ngModel)]="course8">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>STA131</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course9">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n                <button ion-button (click)="answer()">Grade Point</button>\n                <ion-label>{{ife}}</ion-label>\n        </ion-list>\n\n        \n        </ion-slide>\n\n\n\n\n\n\n\n        <!-- second semester -->\n        <ion-slide>\n            \n                <ion-list>\n            <ion-item>\n                <ion-label>CHM112</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course10">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>CHM116</ion-label>\n                <ion-label>1units</ion-label>\n                <ion-select [(ngModel)]="course11">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>CHM132</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course12">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>GNS112</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course13">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>MAT112</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course14">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>MAT114</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course15">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>PHY142</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course16">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>PHY152</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course17">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>PHY192</ion-label>\n                <ion-label>1units</ion-label>\n                <ion-select [(ngModel)]="course18">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>STA124</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course19">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n                <button ion-button (click)="answer2()">Grade Point</button>\n                <ion-label>{{ifed}}</ion-label>\n        </ion-list>\n\n        </ion-slide>\n\n\n\n\n        <!-- cgpa -->\n        <ion-slide>\n\n            <ion-label>FIRST SEMESTER: {{ife}}</ion-label>\n            <ion-label>SECOND SEMESTER: {{ifed}}</ion-label>\n            <ion-label>CGPA: {{total}}</ion-label>\n\n\n        </ion-slide>   \n    </ion-slides>\n</ion-content>'/*ion-inline-end:"/home/eleos/Desktop/mobileapp/nabmes/src/pages/first/first.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FirstPage);
    return FirstPage;
}());

//# sourceMappingURL=first.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FourthPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FourthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FourthPage = /** @class */ (function () {
    function FourthPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SwipedTabsIndicator = null;
        this.tabs = [];
        this.tabs = [
            { title: '1st Semester', icon: 'book' }, { title: 'cgpa', icon: 'list-box' }
            // , { title: 'cgpa', icon: 'browser' }
            // , { title: 'cgpa', icon: 'color-filter' }
        ];
    }
    FourthPage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    FourthPage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform =
            'translate3d(' + (100 * index) + '%,0,0)';
        this.SwipedTabsSlider.slideTo(index, 500);
    };
    FourthPage.prototype.updateIndicatorPosition = function () {
        if (this.SwipedTabsSlider.length() >
            this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform =
                'translate3d('
                    + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    FourthPage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator) {
            this.SwipedTabsIndicator.style.webkitTransform =
                'translate3d('
                    + (($event.progress * (this.SwipedTabsSlider.length() - 1)));
        }
    };
    FourthPage.prototype.answer = function () {
        var jon = ((parseInt(this.course1) * 2) + (parseInt(this.course2) * 3) +
            (parseInt(this.course3) * 3) + (parseInt(this.course4) * 3)
            + (parseInt(this.course5) * 3) + (parseInt(this.course6) * 3)
            + (parseInt(this.course7) * 3) + (parseInt(this.course8) * 2));
        var fav = jon / 22;
        this.mine = jon;
        var jons = fav.toFixed(2);
        this.ife = jons;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], FourthPage.prototype, "SwipedTabsSlider", void 0);
    FourthPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-fourth',template:/*ion-inline-start:"/home/eleos/Desktop/mobileapp/nabmes/src/pages/fourth/fourth.html"*/'<!--\n  Generated template for the FourthPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>400 LEVEL</ion-title>\n  <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs;let i = index\' value="IgnoreMe" (click)="selectTab(i)" [ngClass]=\'{"SwipedTabs-activeTab":(this.SwipedTabsSlider\n                && (this.SwipedTabsSlider.getActiveIndex() === i || \n                (tabs.length -1 === i && this.SwipedTabsSlider.isEnd() )))}\'>\n                <ion-icon [name]="tab.icon"></ion-icon>\n            </ion-segment-button>\n        </ion-segment>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n\n\n    <!-- indicator -->\n    <div id="indicator" class="SwipedTabs-indicatorSegment"></div>\n\n    <ion-slides #SwipedTabsSlider \n    (ionSlideDrag)="animateIndicator($event)"(ionSlideWillChange)="updateIndicatorPosition()"\n    (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <!-- first semester -->\n        <ion-slide>\n        <ion-list padding>\n            <ion-item>\n                <ion-label>ABE463</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course1">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>BME401</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course2">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME403</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course3">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME405</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course4">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME407</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course5">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME409</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course6">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME411</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course7">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME481</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course8">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n                <button ion-button (click)="answer()">Grade Point</button>\n                <ion-label>{{ife}}</ion-label>\n        </ion-list>\n\n        \n        </ion-slide>\n\n\n\n\n\n\n\n        <!-- second semester -->\n<!--        carry over courses       -->\n        <!-- <ion-slide>\n\n            <ion-title>FIRST SEMESTER</ion-title>\n            <ion-item>\n                <ion-label>COURSE 1</ion-label>\n                <ion-select [(ngModel)]="unit">\n                    <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>COURSE 2</ion-label>\n                <ion-select [(ngModel)]="unit1">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                \n                <ion-select [(ngModel)]="grade1">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>COURSE 3</ion-label>\n                <ion-select [(ngModel)]="unit2">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade2">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>COURSE 4</ion-label>\n                <ion-select [(ngModel)]="unit3">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade3">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>COURSE 5</ion-label>\n                <ion-select [(ngModel)]="unit4">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade4">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-title>SECOND SEMESTER</ion-title>\n\n            <ion-item>\n                <ion-label>COURSE 1</ion-label>\n                <ion-select [(ngModel)]="unit5">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade5">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>COURSE 2</ion-label>\n                <ion-select [(ngModel)]="unit6">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade6">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>COURSE 3</ion-label>\n                <ion-select [(ngModel)]="unit7">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade7">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>COURSE 4</ion-label>\n                <ion-select [(ngModel)]="unit8">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade8">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>COURSE 5</ion-label>\n                <ion-select [(ngModel)]="unit9">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade9">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <button ion-button full (click)="carryover()">ADD CARRY OVER COURSES</button>\n        </ion-slide> -->\n\n\n\n\n        <!-- cgpa -->\n        <ion-slide>\n\n            <ion-label>FIRST SEMESTER: {{ife}}</ion-label>\n            <ion-label>SECOND SEMESTER: {{ifed}}</ion-label>\n            <ion-label>CGPA: {{total}}</ion-label>\n\n\n        </ion-slide>   \n    </ion-slides>\n</ion-content>'/*ion-inline-end:"/home/eleos/Desktop/mobileapp/nabmes/src/pages/fourth/fourth.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], FourthPage);
    return FourthPage;
}());

//# sourceMappingURL=fourth.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThirdPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ThirdPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ThirdPage = /** @class */ (function () {
    function ThirdPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SwipedTabsIndicator = null;
        this.tabs = [];
        this.tabs = [
            { title: '1st Semester', icon: 'book' }, { title: '2nd Semester', icon: 'book' }, { title: 'cgpa', icon: 'list-box' }
            // , { title: 'cgpa', icon: 'color-filter' }
        ];
    }
    ThirdPage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    ThirdPage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform =
            'translate3d(' + (100 * index) + '%,0,0)';
        this.SwipedTabsSlider.slideTo(index, 500);
    };
    ThirdPage.prototype.updateIndicatorPosition = function () {
        if (this.SwipedTabsSlider.length() >
            this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform =
                'translate3d('
                    + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    ThirdPage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator) {
            this.SwipedTabsIndicator.style.webkitTransform =
                'translate3d('
                    + (($event.progress * (this.SwipedTabsSlider.length() - 1)));
        }
    };
    ThirdPage.prototype.answer = function () {
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
    };
    ThirdPage.prototype.answer2 = function () {
        var jone = ((parseInt(this.course11) * 2) + (parseInt(this.course12) * 1) +
            (parseInt(this.course13) * 2) +
            (parseInt(this.course14) * 2) + (parseInt(this.course15) * 3) +
            (parseInt(this.course16) * 3) + (parseInt(this.course17) * 2) +
            (parseInt(this.course18) * 3) + (parseInt(this.course19) * 3) +
            (parseInt(this.course20) * 3));
        var favs = jone / 24;
        var jones = favs.toFixed(2);
        this.war = jone;
        this.ifed = jones;
        this.total = ((this.mine + jone) / 54).toFixed(2);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], ThirdPage.prototype, "SwipedTabsSlider", void 0);
    ThirdPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-third',template:/*ion-inline-start:"/home/eleos/Desktop/mobileapp/nabmes/src/pages/third/third.html"*/'<!--\n  Generated template for the ThirdPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>300 LEVEL</ion-title>\n <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs;let i = index\' value="IgnoreMe" (click)="selectTab(i)" [ngClass]=\'{"SwipedTabs-activeTab":(this.SwipedTabsSlider\n                && (this.SwipedTabsSlider.getActiveIndex() === i || \n                (tabs.length -1 === i && this.SwipedTabsSlider.isEnd() )))}\'>\n                <ion-icon [name]="tab.icon"></ion-icon>\n            </ion-segment-button>\n        </ion-segment>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n\n\n    <!-- indicator -->\n    <div id="indicator" class="SwipedTabs-indicatorSegment"></div>\n\n    <ion-slides #SwipedTabsSlider \n    (ionSlideDrag)="animateIndicator($event)"(ionSlideWillChange)="updateIndicatorPosition()"\n    (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <!-- first semester -->\n        <ion-slide>\n        <ion-list padding>\n            <ion-item>\n                <ion-label>BME222</ion-label>\n                <ion-label>6units</ion-label>\n                <ion-select [(ngModel)]="course1">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>BME303</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course2">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME305</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course3">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME307</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course4">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME309</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course5">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME381</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course6">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>ELE321</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course7">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>ELE331</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course8">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>GNS311</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course9">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>GSE301</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="coursea">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>MEE361</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="courseb">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n\n                <button ion-button (click)="answer()">Grade Point</button>\n                <ion-label>{{ife}}</ion-label>\n        </ion-list>\n\n        \n        </ion-slide>\n\n\n\n\n\n\n\n        <!-- second semester -->\n        <ion-slide>\n            \n                <ion-list>\n            <ion-item>\n                <ion-label>ABE306</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course11">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>ABE376</ion-label>\n                <ion-label>1units</ion-label>\n                <ion-select [(ngModel)]="course12">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME310</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course13">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME304</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course14">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME306</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course15">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME308</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course16">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME382</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course17">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>ELE324</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course18">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>MEE356</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course19">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>MEE362</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course20">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n                <button ion-button (click)="answer2()">Grade Point</button>\n                <ion-label>{{ifed}}</ion-label>\n        </ion-list>\n\n        </ion-slide>\n\n<!--        carry over courses       -->\n        <!-- <ion-slide>\n\n            <ion-title>FIRST SEMESTER</ion-title>\n            <ion-item>\n                <ion-label>COURSE 1</ion-label>\n                <ion-select [(ngModel)]="unit">\n                    <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>COURSE 2</ion-label>\n                <ion-select [(ngModel)]="unit1">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                \n                <ion-select [(ngModel)]="grade1">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>COURSE 3</ion-label>\n                <ion-select [(ngModel)]="unit2">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade2">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>COURSE 4</ion-label>\n                <ion-select [(ngModel)]="unit3">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade3">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <ion-item>\n                <ion-label>COURSE 5</ion-label>\n                <ion-select [(ngModel)]="unit4">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade4">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-title>SECOND SEMESTER</ion-title>\n\n            <ion-item>\n                <ion-label>COURSE 1</ion-label>\n                <ion-select [(ngModel)]="unit5">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade5">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>COURSE 2</ion-label>\n                <ion-select [(ngModel)]="unit6">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade6">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>COURSE 3</ion-label>\n                <ion-select [(ngModel)]="unit7">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade7">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>COURSE 4</ion-label>\n                <ion-select [(ngModel)]="unit8">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade8">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>COURSE 5</ion-label>\n                <ion-select [(ngModel)]="unit9">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=1>1</ion-option>\n                    <ion-option value=2>2</ion-option>\n                    <ion-option value=3>3</ion-option>\n                    <ion-option value=4>4</ion-option>\n                    <ion-option value=6>6</ion-option>\n                </ion-select>\n                <ion-select [(ngModel)]="grade9">\n                <ion-option value=0 selected= "true">none</ion-option>\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n            <button ion-button full (click)="carryover()">ADD CARRY OVER COURSES</button>\n        </ion-slide> -->\n\n<!--          cgpa                  -->\n        <ion-slide>\n\n            <ion-label>FIRST SEMESTER: {{ife}}</ion-label>\n            <ion-label>SECOND SEMESTER: {{ifed}}</ion-label>\n            <ion-label>CGPA: {{total}}</ion-label>\n\n\n        </ion-slide>   \n    </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/eleos/Desktop/mobileapp/nabmes/src/pages/third/third.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], ThirdPage);
    return ThirdPage;
}());

//# sourceMappingURL=third.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SecondPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SecondPage = /** @class */ (function () {
    function SecondPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.SwipedTabsIndicator = null;
        this.tabs = [];
        this.tabs = [
            { title: '1st Semester', icon: 'book' }, { title: '2nd Semester', icon: 'book' }, { title: 'cgpa', icon: 'list-box' }
        ];
    }
    SecondPage.prototype.ionViewDidEnter = function () {
        this.SwipedTabsIndicator = document.getElementById("indicator");
    };
    SecondPage.prototype.selectTab = function (index) {
        this.SwipedTabsIndicator.style.webkitTransform =
            'translate3d(' + (100 * index) + '%,0,0)';
        this.SwipedTabsSlider.slideTo(index, 500);
    };
    SecondPage.prototype.updateIndicatorPosition = function () {
        if (this.SwipedTabsSlider.length() >
            this.SwipedTabsSlider.getActiveIndex()) {
            this.SwipedTabsIndicator.style.webkitTransform =
                'translate3d('
                    + (this.SwipedTabsSlider.getActiveIndex() * 100) + '%,0,0)';
        }
    };
    SecondPage.prototype.animateIndicator = function ($event) {
        if (this.SwipedTabsIndicator) {
            this.SwipedTabsIndicator.style.webkitTransform =
                'translate3d('
                    + (($event.progress * (this.SwipedTabsSlider.length() - 1)));
        }
    };
    SecondPage.prototype.answer = function () {
        var jon = ((parseInt(this.course1) * 2) + (parseInt(this.course2) * 3) +
            (parseInt(this.course3) * 2) + (parseInt(this.course4) * 2)
            + (parseInt(this.course5) * 3) + (parseInt(this.course6) * 3)
            + (parseInt(this.course7) * 3) + (parseInt(this.course8) * 1)
            + (parseInt(this.course9) * 2) + (parseInt(this.course10) * 2) +
            (parseInt(this.course11) * 2));
        var fav = jon / 25;
        this.mine = jon;
        var jons = fav.toFixed(2);
        this.ife = jons;
    };
    SecondPage.prototype.answer2 = function () {
        var jone = ((parseInt(this.course12) * 2) + (parseInt(this.course13) * 2) +
            (parseInt(this.course14) * 2) + (parseInt(this.course15) * 3) +
            (parseInt(this.course16) * 3) + (parseInt(this.course17) * 3) +
            (parseInt(this.course18) * 3) + (parseInt(this.course19) * 2) +
            (parseInt(this.course20) * 2) + (parseInt(this.course21) * 2) +
            (parseInt(this.course22) * 2));
        var favs = jone / 26;
        var jones = favs.toFixed(2);
        this.ifed = jones;
        this.total = ((this.mine + jone) / 51).toFixed(2);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('SwipedTabsSlider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Slides */])
    ], SecondPage.prototype, "SwipedTabsSlider", void 0);
    SecondPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-second',template:/*ion-inline-start:"/home/eleos/Desktop/mobileapp/nabmes/src/pages/second/second.html"*/'<!--\n  Generated template for the SecondPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>200 LEVEL</ion-title>\n         <ion-segment class="SwipedTabs-tabs">\n            <ion-segment-button *ngFor=\'let tab of tabs;let i = index\' value="IgnoreMe" (click)="selectTab(i)" [ngClass]=\'{"SwipedTabs-activeTab":(this.SwipedTabsSlider\n                && (this.SwipedTabsSlider.getActiveIndex() === i || \n                (tabs.length -1 === i && this.SwipedTabsSlider.isEnd() )))}\'>\n                <ion-icon [name]="tab.icon"></ion-icon>\n            </ion-segment-button>\n        </ion-segment>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content>\n\n\n\n    <!-- indicator -->\n    <div id="indicator" class="SwipedTabs-indicatorSegment"></div>\n\n    <ion-slides #SwipedTabsSlider \n    (ionSlideDrag)="animateIndicator($event)"(ionSlideWillChange)="updateIndicatorPosition()"\n    (ionSlideDidChange)="updateIndicatorPosition()" (pan)="updateIndicatorPosition()" [pager]="false">\n        <!-- first semester -->\n        <ion-slide>\n        <ion-list>\n            <ion-item>\n                <ion-label>GNS111</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course1">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>ABE263</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course2">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME201</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course3">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME283</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course4">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>CHE241</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course5">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>CVE253</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course6">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>ELE201</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course7">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>ELE275</ion-label>\n                <ion-label>1units</ion-label>\n                <ion-select [(ngModel)]="course8">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>GNS211</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course9">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n                        <ion-item>\n                <ion-label>MEE217</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course10">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>MEE235</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course11">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n\n                <button ion-button (click)="answer()">Grade Point</button>\n                <ion-label id="lab">{{ife}}</ion-label>\n        </ion-list>\n        \n        </ion-slide>\n\n\n\n\n\n\n\n        <!-- second semester -->\n        <ion-slide>\n            \n                <ion-list>\n            <ion-item>\n                <ion-label>GNS112</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course12">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>ABE206</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course13">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>BME284</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course14">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>CHE242</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course15">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>CHE264</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course16">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>CVE254</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course17">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>ELE202</ion-label>\n                <ion-label>3units</ion-label>\n                <ion-select [(ngModel)]="course18">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>ELE276</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course19">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>GNS212</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course20">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>MEE218</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course21">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n            <ion-item>\n                <ion-label>MEE272</ion-label>\n                <ion-label>2units</ion-label>\n                <ion-select [(ngModel)]="course22">\n                    <ion-option value=5>A</ion-option>\n                    <ion-option value=4>B</ion-option>\n                    <ion-option value=3>C</ion-option>\n                    <ion-option value=2>D</ion-option>\n                    <ion-option value=0>F</ion-option>\n                </ion-select>\n            </ion-item>\n                <button ion-button (click)="answer2()">Grade Point</button>\n                <ion-label>{{ifed}}</ion-label>\n        </ion-list>\n\n        </ion-slide>\n\n\n\n\n        <!-- cgpa -->\n        <ion-slide>\n\n            <ion-label class="total">FIRST SEMESTER: {{ife}}</ion-label>\n            <ion-label class="total">SECOND SEMESTER: {{ifed}}</ion-label>\n            <ion-label class="total">CGPA: {{total}}</ion-label>\n\n\n        </ion-slide>   \n    </ion-slides>\n</ion-content>\n'/*ion-inline-end:"/home/eleos/Desktop/mobileapp/nabmes/src/pages/second/second.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SecondPage);
    return SecondPage;
}());

//# sourceMappingURL=second.js.map

/***/ }),

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 157:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/fifth/fifth.module": [
		293,
		4
	],
	"../pages/first/first.module": [
		294,
		3
	],
	"../pages/fourth/fourth.module": [
		295,
		2
	],
	"../pages/second/second.module": [
		297,
		1
	],
	"../pages/third/third.module": [
		296,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 157;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__first_first__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__second_second__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__third_third__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fourth_fourth__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__fifth_fifth__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.first = __WEBPACK_IMPORTED_MODULE_2__first_first__["a" /* FirstPage */];
        this.second = __WEBPACK_IMPORTED_MODULE_3__second_second__["a" /* SecondPage */];
        this.third = __WEBPACK_IMPORTED_MODULE_4__third_third__["a" /* ThirdPage */];
        this.fourth = __WEBPACK_IMPORTED_MODULE_5__fourth_fourth__["a" /* FourthPage */];
        this.fifth = __WEBPACK_IMPORTED_MODULE_6__fifth_fifth__["a" /* FifthPage */];
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/eleos/Desktop/mobileapp/nabmes/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      NABMES UNILORIN\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <button ion-button [navPush]="first"  color="primary" class="button" large block round> 100 LEVEL</button>\n    <button ion-button [navPush]="second" color="primary" class="button" large block round> 200 LEVEL</button>\n    <button ion-button [navPush]="third" color="primary" class="button" large block round> 300 LEVEL</button>\n    <button ion-button [navPush]="fourth" color="primary" class="button" large block round> 400 LEVEL</button>\n    <button ion-button [navPush]="fifth" color="primary" class="button" large block round> 500 LEVEL</button>\n</ion-content>\n'/*ion-inline-end:"/home/eleos/Desktop/mobileapp/nabmes/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(232);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__directives_SwipeSegmentDirective__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_first_first__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_second_second__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_third_third__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_fourth_fourth__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_fifth_fifth__ = __webpack_require__(101);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_second_second__["a" /* SecondPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_third_third__["a" /* ThirdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_fourth_fourth__["a" /* FourthPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_fifth_fifth__["a" /* FifthPage */],
                __WEBPACK_IMPORTED_MODULE_6__directives_SwipeSegmentDirective__["a" /* SwipeSegmentDirective */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/fifth/fifth.module#FifthPageModule', name: 'FifthPage', segment: 'fifth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/first/first.module#FirstPageModule', name: 'FirstPage', segment: 'first', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/fourth/fourth.module#FourthPageModule', name: 'FourthPage', segment: 'fourth', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/third/third.module#ThirdPageModule', name: 'ThirdPage', segment: 'third', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/second/second.module#SecondPageModule', name: 'SecondPage', segment: 'second', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5_ionic2_super_tabs__["a" /* SuperTabsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_first_first__["a" /* FirstPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_second_second__["a" /* SecondPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_third_third__["a" /* ThirdPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_fourth_fourth__["a" /* FourthPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_fifth_fifth__["a" /* FifthPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeSegmentDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SwipeSegmentDirective = /** @class */ (function () {
    function SwipeSegmentDirective(_el) {
        this._el = _el;
        this.tabsList = [];
        this.currentTab = '';
        this.tabChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.el = _el.nativeElement;
    }
    SwipeSegmentDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.swipeGesture = new __WEBPACK_IMPORTED_MODULE_1_ionic_angular_gestures_gesture__["a" /* Gesture */](this.el);
        this.swipeGesture.listen();
        this.swipeGesture.on('swipe', function (event) {
            _this.swipeHandler(event);
        });
    };
    SwipeSegmentDirective.prototype.swipeHandler = function (event) {
        if (event.direction == '2') {
            // move forward
            var currentIndex = this.tabsList.indexOf(this.currentTab), nextIndex = currentIndex + 1;
            if (nextIndex < this.tabsList.length) {
                this.currentTab = this.tabsList[nextIndex];
                this.tabChanged.emit(this.currentTab);
            }
        }
        else if (event.direction == '4') {
            // move backward
            var currentIndex = this.tabsList.indexOf(this.currentTab), nextIndex = currentIndex - 1;
            if (nextIndex >= 0) {
                this.currentTab = this.tabsList[nextIndex];
                this.tabChanged.emit(this.currentTab);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Array)
    ], SwipeSegmentDirective.prototype, "tabsList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", String)
    ], SwipeSegmentDirective.prototype, "currentTab", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], SwipeSegmentDirective.prototype, "tabChanged", void 0);
    SwipeSegmentDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: '[swipeSegment]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */]])
    ], SwipeSegmentDirective);
    return SwipeSegmentDirective;
}());

//# sourceMappingURL=SwipeSegmentDirective.js.map

/***/ }),

/***/ 292:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(209);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/eleos/Desktop/mobileapp/nabmes/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/eleos/Desktop/mobileapp/nabmes/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[210]);
//# sourceMappingURL=main.js.map