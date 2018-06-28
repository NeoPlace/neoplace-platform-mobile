import {IvpayPage} from './ivpay';
import {NgModule} from '@angular/core';
import {IonicPageModule} from 'ionic-angular';

@NgModule({
  declarations: [
    IvpayPage,
  ],
  imports: [
    IonicPageModule.forChild(IvpayPage)
  ],
  exports: [
    IvpayPage
  ]
})

export class LoginListPageModule { }
