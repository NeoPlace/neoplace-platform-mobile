//USED for Menu
export const LISTMENUHOME = [
    { title: 'Dashboard v1', component: 'Homev1Page' }
];

//Main Menu1
export const PAGES = [
    { icon: 'store', title: 'My store', page: 'MyStorePage', active: false, },
    { icon: 'sale', title: 'My sales', page: 'MySalesPage', active: false, },
    { icon: 'purchase', title: 'My purchases', page: 'PurchasePage', active: false, },
    { icon: 'transaction', title: 'My transactions', page: 'TransactionPage', active: false, },
    { icon: 'inventory', title: 'My inventory', page: 'InventoryPage', active: false, },
    { icon: 'profile', title: 'Profile', page: 'ProfileSettingsPage', active: false, },
    { icon: 'power', title: 'Sign out', page: 'LoginPage', active: false, }
];

export const PAGES1 = [
  { icon: 'add-circle', title: 'Add service', page: 'AddServicePage', active: false, },
  { icon: 'pin', title: 'Nearby', page: 'StoreServicePage', active: false, },
];

export const PAGES2 = [
  { icon: 'add-circle', title: 'Add item', page: 'AddPage', active: false, },
  { icon: 'pin', title: 'Nearby', page: 'StorePage', active: false, },
];

import { Injectable } from '@angular/core';
@Injectable()
export class AppState {
  _state = {};

  // already return a clone of the current state
  get state() {
    return this._state = this.clone(this._state);
  }

  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  get(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }

  private clone(object) {
    // simple object clone
    return JSON.parse(JSON.stringify(object));
  }
}
