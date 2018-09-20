import {Component} from "@angular/core";
import {ModalController, NavController, NavParams, Platform, ViewController} from "ionic-angular";

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})

export class ListPage {
    constructor (public navCtrl: NavController, public modalCtrl: ModalController){

    }

    items = [
        {name:'Gollum',charNum:'0'},
        {name:'Frodo Baggins',charNum:'1'},
        {name:'Sam',charNum:'2'}
    ];

    /*items = [
        'Pokemon Yellow',
        'Super Metroid',
        'Mega Man X',
        'The Legend of Zelda',
        'Pac-Man',
        'Super Mario World',
        'Street Fighter II',
        'Half Life',
        'Final Fantasy VII',
        'Star Fox',
        'Tetris',
        'Donkey Kong III',
        'GoldenEye 007',
        'Doom',
        'Fallout',
        'GTA',
        'Hallo'
    ];*/

    /*items = [
        {title: 'Pokemon Yellow',icon:'leaf'},
        {title: 'Super Metroid',icon:'analytics'},
        {title: 'Mega Man X',icon:'thunderstorm'}
    ];*/

    itemSelected(item: String){
        console.log("Selected Item",item);
    }

    openModal(characterNum){
        let modal = this.modalCtrl.create(ModalContentPage,characterNum);
        modal.present();
    }

}

@Component({
    templateUrl: 'modal-content.html'
})

export class ModalContentPage {
    character;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ){
        var characters = [
            {
                name: 'Gollum',
                quote: 'Sneaky little hobbitses',
                image: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-gollum.jpg',
                items: [
                    {title: 'Race', note: 'Hobbit'},
                    {title: 'Culture', note: 'River Folk'},
                    {title: 'Alter Ego', note: 'Smeagol'}
                ]
            },
            {
                name: 'Frodo',
                quote: 'Go back, Sam! I\'m going to Mordor alone',
                image: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-frodo.jpg',
                items:[
                    {title: 'Race', note: 'Hobbit'},
                    {title: 'Culture', note: 'Shire Folk'},
                    {title: 'Weapon', note: 'Sting'}
                ]
            },
            {
                name: 'Samwise Gamgee',
                quote: 'What we need is a few good taters',
                image: 'https://ionicframework.com/dist/preview-app/www/assets/img/avatar-samwise.jpg',
                items: [
                    {title: 'Race', note: 'Hobbit'},
                    {title: 'Culture', note: 'Shire Folk'},
                    {title: 'Nickname', note: 'Sam'}
                ]
            }
        ];
        this.character = characters[this.params.get('charNum')];
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }
}