import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {NavController, Platform} from "ionic-angular";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor(public navCtrl:NavController,public platform:Platform) {
    let backAction = platform.registerBackButtonAction(()=>{
      console.log("tabs page");
      this.navCtrl.pop();
      backAction();
      },2)
  }

  ionViewDidLoad(){
    console.log("tabs page as home page");
  }
}
