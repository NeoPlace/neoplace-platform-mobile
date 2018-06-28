import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, Slides } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-homev1',
  templateUrl: 'homev1.html'
})
export class Homev1Page {
  @ViewChild('slider') slider: Slides;

  pages:any[];

  PAGES = [
    { icon: 'body', title: 'Clothing', type: 'clothing', page: 'StorePage', active: true, },
    { icon: 'phone-portrait', title: 'Phones & Accessories', type: 'phone', page: 'StorePage', active: false, },
    { icon: 'desktop', title: 'Computer', type: 'computer', page: 'StorePage', active: false, },
    { icon: 'camera', title: 'Consumer Electronics', type: 'electronic', page: 'StorePage', active: false, },
    { icon: 'md-watch', title: 'Watches', type: 'watch', page: 'StorePage', active: false, },
    { icon: 'albums', title: 'Others', type: 'other', page: 'StorePage', active: false, }
  ];

  constructor( public navCtrl: NavController ) {

    //Main Menu
    this.pages = this.PAGES;
  }

  showList(pages) {
    //this.navCtrl.setRoot(pages.page);
    this.navCtrl.push(pages.page, {type: pages.type});
  }

  showAll() {
    //this.navCtrl.setRoot(pages.page);
    this.navCtrl.push('StorePage');
  }

  showPage(page) {
    this.navCtrl
      .push(page);
  }

  ngAfterViewInit() {
    this.slider.freeMode = true;
  }

}
