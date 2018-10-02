import {Component, ElementRef, ViewChild} from "@angular/core";
import {NavParams, PopoverController} from "ionic-angular";

@Component({
    selector: 'page-popover',
    templateUrl: 'popover.html'
})

export class PopoverPage {
    @ViewChild('popoverContent',{read: ElementRef}) content: ElementRef;
    @ViewChild('popoverText', {read: ElementRef}) text: ElementRef;

    constructor(public popoverCtrl: PopoverController){

    }

    presentPopover(ev){
        let popover = this.popoverCtrl.create(Popovers,{
            contentEle: this.content.nativeElement,
            textEle: this.text.nativeElement
        });

        popover.present({
            ev: ev
        });
    }
}

@Component({
    templateUrl:'popover-opt.html'
})

export class Popovers {
    background: string;
    contentEle: any;
    textEle: any;
    fontFamily;

    colors = {
        'white': {
            'bg': 'rgb(255, 255, 255)',
            'fg': 'rgb(0, 0, 0)'
        },
        'tan': {
            'bg': 'rgb(249, 241, 228)',
            'fg': 'rgb(0, 0, 0)'
        },
        'grey': {
            'bg': 'rgb(76, 75, 80)',
            'fg': 'rgb(255, 255, 255)'
        },
        'black': {
            'bg': 'rgb(0, 0, 0)',
            'fg': 'rgb(255, 255, 255)'
        },
    };

    constructor(private navParams: NavParams){

    }

    ngOnInit(){
        if (this.navParams.data){
            this.contentEle = this.navParams.data.contentEle;
            this.textEle = this.navParams.data.textEle;

            this.background = this.getColorName(this.contentEle.style.backgroundColor);
            this.setFontFamily();
        }
    }

    getColorName(background){
        let colorName = 'white';

        if (!background) return 'white';

        for (var key in this.colors){
            if (this.colors[key].bg == background){
                colorName = key;
            }
        }

        return colorName;
    }

    setFontFamily(){
        if (this.textEle.style.fontFamily){
            this.fontFamily = this.textEle.style.fontFamily.replace(/'/g,"");
        }
    }

    changeBackground(color){
        this.background = color;
        this.contentEle.style.backgroundColor = this.colors[color].bg;
        this.textEle.style.color = this.colors[color].fg;
    }

    changeFontSize(direction){
        this.textEle.style.fontSize = direction;
    }

    changeFontFamily(value){
        //if (this.fontFamily) this.textEle.style.fontFamily = this.fontFamily;
        this.fontFamily = value;
        if (this.fontFamily) this.textEle.style.fontFamily = this.fontFamily;
        //console.log(value);
    }
}