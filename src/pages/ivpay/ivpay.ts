import {Component, ViewChild} from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, Slides} from 'ionic-angular';
import {CryptocompareService} from "../../providers/cryptocompare.service";

@IonicPage()
@Component({
  selector: 'page-ivpay',
  templateUrl: 'ivpay.html'
})
export class IvpayPage {
  @ViewChild('slider') slider: Slides;

  slides;

  public  trigramAvailable = ['ETH', 'BTC', 'NEO', 'GAS'];

  pages2:any[] = [
    { icon: 'qr-scanner', title: 'Scan', page: 'ScanPage', active: true, },
    { icon: 'barcode', title: 'Pay', page: 'PayPage', active: false, },
    { icon: 'log-in', title: 'Request', page: 'RequestPage', active: false, },
    { icon: 'repeat', title: 'Transfer', page: 'TransferPage', active: false, },
    { icon: 'logo-usd', title: 'Fiat/Crypto exchange', page: 'FiatPage', active: false, },
    { icon: 'card', title: 'Wallet', page: 'WalletPage', active: false, }
  ];

  constructor( public navCtrl: NavController,
               private alertCtrl: AlertController,
               private cryptoCompareService: CryptocompareService,
               public loadingCtrl: LoadingController) {
    this.slides = [];
    for(let crypto of this.trigramAvailable) {
      this.cryptoCompareService.getRateCrypto(crypto)
        .subscribe(data => {
          this.slides.push({
            title: crypto.toUpperCase(),
            img: "assets/img/" + crypto.toLowerCase() + "-avatar.png",
            currency: 'USD',
            rate: data['USD']
          });
        });
    }
  }

  showList(pages) {
    if(pages.page == 'PayPage' || pages.page === 'RequestPage') {
      let alert = this.alertCtrl.create({
        cssClass: 'radio-alert'
      });
      alert.setTitle('Choose your wallet');

      for (let trigram of this.trigramAvailable) {
        alert.addInput({
          type: 'radio',
          label: trigram.toUpperCase(),
          value: trigram.toLowerCase(),
          checked: trigram.toLowerCase() == 'eth' ? true : false
        });
      }

      alert.addButton({
        text: 'Ok',
        handler: data => {
          this.navCtrl.push(pages.page, {trigram: data});
        }
      });

      alert.present();

    } else if(pages.page === 'FiatPage') {
      let alert = this.alertCtrl.create({
        cssClass: 'radio-alert'
      });
      alert.setTitle('Fiat exchange');

      alert.addInput({
        type: 'radio',
        label: 'Get ' + 'USD' + ' with ' + 'ETH',
        value: 'fiat',
        checked: true
      });

      alert.addInput({
        type: 'radio',
        label: 'Get ' + 'ETH' + ' with ' + 'USD',
        value: 'crypto',
        checked: false
      });


      alert.addButton({
        text: 'Ok',
        handler: data => {
          if(data == 'crypto') {
            this.navCtrl.push(pages.page, {trigram: 'ETH'.toLowerCase(), request: true});
          } else {
            this.navCtrl.push(pages.page, {trigram: 'ETH'.toLowerCase()});
          }

        }
      });

      alert.present();
    } else {
      this.navCtrl.push(pages.page);
    }
  }

}
