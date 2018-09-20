import {Component} from '@angular/core';
import {ViewChild} from "@angular/core";
import {MenuController, Platform} from 'ionic-angular';
import {Nav} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import {AboutPage} from "../pages/about/about";
import {ContactPage} from "../pages/contact/contact";
import {ListPage} from "../pages/list/list";
import {ListDividersPage} from "../pages/list-dividers/list-dividers";
import {AvatarListPage} from "../pages/avatar-list/avatar-list";
import {SlidingListPage} from "../pages/sliding-list/sliding-list";
import {ThumbnailsPage} from "../pages/thumbnails/thumbnails";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any = TabsPage;
  pages:Array<{title:String,component:any}>;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.pages = [
        {title:'About',component:AboutPage},
        {title:'Contact',component:ContactPage},
        {title:'List',component:ListPage},
        {title:'List Dividers',component:ListDividersPage},
        {title:'Avatar List',component:AvatarListPage},
        {title:'Sliding List',component:SlidingListPage},
        {title:'Thumbnail List',component:ThumbnailsPage}
    ];
  }


  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn’t want the back button to show in this scenario
    //this.nav.setRoot(page.component);

      //this.rootPage = page.component; //with back button
      this.nav.push(page.component);
  }
}
