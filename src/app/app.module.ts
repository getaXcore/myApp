import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {ListPage, ModalContentPage} from "../pages/list/list";
import {ListDividersPage} from "../pages/list-dividers/list-dividers";
import {AvatarListPage} from "../pages/avatar-list/avatar-list";
import {SlidingListPage} from "../pages/sliding-list/sliding-list";
import {ThumbnailsPage} from "../pages/thumbnails/thumbnails";
import {PopoverPage, Popovers} from "../pages/popover/popover";
import {RangesPage} from "../pages/ranges/ranges";
import {SearchPage} from "../pages/search/search";
/*import {ListPage} from "../pages/list/list";
import {ItemDetailPage} from "../pages/item-details/item-details";*/

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListPage,
    /*ItemDetailPage*/
    LoginPage,
    ListDividersPage,
    AvatarListPage,
    SlidingListPage,
    ThumbnailsPage,
    ModalContentPage,
    PopoverPage,
    Popovers,
    RangesPage,
    SearchPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    ListPage,
    /*ItemDetailPage*/
    LoginPage,
    ListDividersPage,
    AvatarListPage,
    SlidingListPage,
    ThumbnailsPage,
    ModalContentPage,
    PopoverPage,
    Popovers,
    RangesPage,
    SearchPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
