import { HomeListPage } from './home';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {QRCodeModule} from "angular2-qrcode";

@NgModule({
  declarations: [
    HomeListPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeListPage)
  ],
  exports: [
    HomeListPage
  ]
})

export class HomeListPageModule { }
