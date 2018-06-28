import {Component} from '@angular/core';
import {IonicPage} from "ionic-angular";

@IonicPage()
@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1: string = "Homev1Page";
  tab2: string = "IvpayPage";
  tab4: string = "DiscussionsPage";

  constructor() {
  }

}
