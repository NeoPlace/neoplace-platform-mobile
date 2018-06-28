import { IvpayPage } from './ivpay';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import {AgmCoreModule} from "@agm/core";

@NgModule({
  declarations: [
    IvpayPage,
  ],
  imports: [
    IonicPageModule.forChild(IvpayPage),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWc6kOtjHwnrL3bTJWG5YklwyB8SxFm8A'
    })
  ],
  exports: [
    IvpayPage
  ]
})

export class LoginListPageModule { }
