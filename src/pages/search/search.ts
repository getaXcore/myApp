import {Component} from "@angular/core";
import {NavController} from "ionic-angular";

@Component({
    selector: 'page-search',
    templateUrl: 'search.html'
})

export class SearchPage {
    items;

    constructor(public navCtrl: NavController){
        this.intializeItems();
    }

    intializeItems(){
        this.items = [
            'Amsterdam',
            'Bogota',
            'Buenos aires',
            'Cairo',
            'Dhaka',
            'Edinburgh',
            'Geneva',
            'Genoa',
            'Glasglow',
            'Hanoi',
            'Hong Kong',
            'Islamabad',
            'Istanbul',
            'Jakarta',
            'Kiel',
            'Kyoto',
            'Le Havre',
            'Lebanon',
            'Lhasa',
            'Lima',
            'London',
            'Los Angeles',
            'Madrid',
            'Manila',
            'New York',
            'Olympia',
            'Oslo',
            'Panama City',
            'Peking',
            'Philadelphia',
            'San Francisco',
            'Seoul',
            'Taipeh',
            'Tel Aviv',
            'Tokio',
            'Uelzen',
            'Washington',
            'Thailand',
            'Indonesia'
        ];
    }

    getItems(ev){
        //Reset items back to all of the items
        this.intializeItems();

        //set val to the value of the ev target
        var val = ev.target.value;

        //if the value is an empty string don't filter the items
        if (val && val.trim() != ''){
            this.items = this.items.filter((item) => {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            })
        }
    }
}