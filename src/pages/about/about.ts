import {Component} from '@angular/core';
import {ActionSheetController, AlertController, NavController, Platform} from 'ionic-angular';
import {ContactPage} from "../contact/contact";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  constructor(public navCtrl:NavController, platform:Platform, public actionSheetCtrl:ActionSheetController, public alertCtrl:AlertController) {
    platform.registerBackButtonAction(()=>{
      console.log("backpress 2");
      },2)
  }
  back() {
    this.navCtrl.push(ContactPage);
  }
  presentActionSheet(){
    const actionSheet = this.actionSheetCtrl.create({
        title: 'Modify your album',
        buttons: [
            {
              text: 'Destructive',
                icon: 'trash',
                role: 'destructive',
                handler: () => {
                  console.log('Destructive clicked');
                }
            },{
              text: 'Archive',
                icon: 'archive',
                handler: () => {
                  console.log('Archive clicked');
                }
            },{
              text: 'Cancel',
                icon: 'close',
                role: 'cancel',
                handler: () => {
                  console.log('Cancel clicked');
                }
            }
        ]
    });
    actionSheet.present();
  }
  showAlert(){
    const alert = this.alertCtrl.create({
        title: 'Test Alert',
        subTitle: 'Hallo!!!',
        buttons: ['OK']
    });
    alert.present();
  }
  showPrompt(){
      const prompt = this.alertCtrl.create({
          title: 'Login',
          message: 'Masukkan nama untuk album yang baru anda tambahkan',
          inputs: [
              {
                  name: 'title',
                  placeholder: 'Title'
              },
          ],
          buttons: [
              {
                  text: 'Cancel',
                  handler: data => {
                      console.log('Cancel clicked');
                  }
              },
              {
                  text: 'Save',
                  handler: data => {
                      console.log('Save clicked');
                  }
              }
          ]
      });
      prompt.present();
  }
  showConfirm(){
      const confirm = this.alertCtrl.create({
          title: 'Delete Album',
          message: 'Apakah akan dihapus album ini?',
          buttons: [
              {
                  text: 'Tidak',
                  handler: () => {
                      console.log('Disagree clicked');
                  }
              },
              {
                  text: 'Ya',
                  handler: () => {
                      console.log('Agree clicked');
                  }
              }
          ]
      });
      confirm.present();
  }
}
