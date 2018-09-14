import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
  public event = {
    month: '1990-02-19',
    timeStart: '07:43',
    timeEnds: '1990-02-02'
  }
  public press: number = 0;
  public pan: number = 0;
  public swipe: number = 0;
  public tap: number = 0;
  myIcon: string = "home";
  myColor: string = "primary";

  constructor(public navCtrl: NavController) {

  }
  pressEvent(e){
    this.press++
  }
  panEvent(e){
    this.pan++;
  }
  swipeEvent(e){
    this.swipe++
  }
  tapEvent(e){
    this.tap++
  }

}
