import {NavController} from "ionic-angular";
import {Component} from "@angular/core";

@Component({
    selector: 'page-ranges',
    templateUrl: 'ranges.html'
})

export class RangesPage {
    brightness: number = 20;
    contrast: number = 0;
    warmth: number = 1300;
    structure: any = {lower: 33, upper: 60};
    text: number = 0;

    constructor(public navCtrl: NavController){

    }
}
