import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import 'rxjs/add/operator/map';
import * as CryptoJS from 'crypto-js';

@Injectable()
export class CrudStorageProvider {

    datas: any;

  private key: string = 'TODO';

    constructor(private storage: Storage) {
        this.datas = null;
    }

  setWalletAddress(trigram, address) {
    this.storage.set('neoplace.wallet.' + trigram.toLowerCase(), address)
      .then(data => {
        //console.log("save success. wallet : ", data);
      });
  }

  getWalletAddress(trigram) {
    return new Promise(resolve => {
      this.storage.get('neoplace.wallet.' + trigram.toLowerCase())
        .then(data => {
          //console.log(data);
          resolve(data);
        });
    });
  }

  setPassword(username, password) {
    var encrypted = CryptoJS.AES.encrypt(password, this.key);
    var encryptedmessage = encrypted.toString();
    this.storage.set('neoplace.priv.' + username, encryptedmessage)
      .then(data => {
        //console.log("save success. wallet : ", data);
      });
  }

  getPassword(username) {
    return new Promise(resolve => {
      this.storage.get('neoplace.priv.' + username)
        .then(data => {
          var decrypted = CryptoJS.AES.decrypt(data, this.key);
          var c = decrypted.toString(CryptoJS.enc.Utf8);
          resolve(c);
        });
    });
  }

}
