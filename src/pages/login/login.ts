import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoadingController} from "ionic-angular";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class LoginPage {

    constructor(public navCtrl:NavController, public loadingCtrl: LoadingController){

    }

    presentLoading(){
        this.loadingCtrl.create({
            content: 'Please wait...',
            duration: 3000,
            dismissOnPageChange: true
        }).present();
    }

}