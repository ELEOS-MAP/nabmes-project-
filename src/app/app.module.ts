import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SuperTabsModule } from 'ionic2-super-tabs';
import { SwipeSegmentDirective } from '../directives/SwipeSegmentDirective';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FirstPage } from '../pages/first/first';
import { SecondPage } from '../pages/second/second';
import { ThirdPage } from '../pages/third/third';
import { FourthPage } from '../pages/fourth/fourth';
import { FifthPage } from '../pages/fifth/fifth';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FirstPage,
    SecondPage,
    ThirdPage,
    FourthPage,
    FifthPage,
    SwipeSegmentDirective,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FirstPage,
    SecondPage,
    ThirdPage,
    FourthPage,
    FifthPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
