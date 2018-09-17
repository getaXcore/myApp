import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
    selector: 'page-list',
    templateUrl: 'list.html'
})

export class ListPage {
    constructor (public navCtrl: NavController){

    }

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

    items = [
        {title: 'Pokemon Yellow',icon:'leaf'},
        {title: 'Super Metroid',icon:'analytics'},
        {title: 'Mega Man X',icon:'thunderstorm'}
    ];

    itemSelected(item: String){
        console.log("Selected Item",item);
    }

}