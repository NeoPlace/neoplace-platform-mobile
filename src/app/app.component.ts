import {Component, ViewChild} from '@angular/core';
import {AlertController, MenuController, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {Push} from '@ionic-native/push';
import {AppState, PAGES} from './global.setting';
import {Subject} from 'rxjs';
import {Profil} from "../providers/model/profil";
import {UserService} from "../providers/user.service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage:any = 'LoginPage';
  pages:any[];
  activePage = new Subject();

  profil: Profil;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public push: Push,
    public global: AppState,
    public alertCtrl: AlertController,
    public menuCtrl: MenuController,
    private userService: UserService) {
    this.initializeApp();

    //Main Menu
    this.pages = PAGES;

    this.activePage.subscribe((selectedPage: any) => {
      this.pages.map(page => {
        page.active = page.title === selectedPage.title;
      });
    });
  }

  public updateUser(profil: Profil) {
    this.profil = profil;
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.global.set('theme', '');
      //this.initPushNotification();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      //this.menuCtrl.enable(false, 'menu-material');
    });
  }

  openPage(pages) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    if(pages.page == "ProfileSettingsPage" || pages.page == "MyStorePage"
      || pages.page == "TransactionPage" || pages.page == "PurchasePage"
      || pages.page == "InventoryPage" || pages.page == "MySalesPage") {
      this.nav.push(pages.page);
    } else if(pages.page == "LoginPage") {
      this.userService.logout();
      this.nav.setRoot(pages.page);
    } else {
      this.nav.setRoot(pages.page);
      this.activePage.next(pages);
    }
  }

}

