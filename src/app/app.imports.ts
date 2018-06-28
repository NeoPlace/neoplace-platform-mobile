//Used for Theming
import {AppState} from './global.setting';
//MODULE
import {HttpModule} from '@angular/http';
import {IonicStorageModule} from '@ionic/storage';
import {BrowserModule} from '@angular/platform-browser';
//PROVIDER
import {CrudStorageProvider} from '../providers/crud-storage/crud-storage';
import {ToastService} from '../providers/util/toast.service';
import {AlertService} from '../providers/util/alert.service';
//NATIVE
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';
// import { NativeAppRatePage } from '../pages/native-app-rate/native-app-rate';
import {Camera} from '@ionic-native/camera';
import {CallNumber} from '@ionic-native/call-number';
import {Crop} from '@ionic-native/crop';
import {DatePicker} from '@ionic-native/date-picker';
import {Geolocation} from '@ionic-native/geolocation';
import {PhotoLibrary} from '@ionic-native/photo-library';
import {Push} from '@ionic-native/push';
//DIRECTIVES
import {Autosize} from '../components/autosize/autosize';
import {InvokeDirective} from '../components/invoke-directive/invokeDirective';
//COMPONENT
//PIPES
import {CapitalizePipe} from '../pipes/capitalize.pipe';
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {GoogleMaps} from "@ionic-native/google-maps";
import {Api} from "../providers/api";
import {CryptocompareService} from "../providers/cryptocompare.service";
import {DistancePipe} from "../pipes/distance.pipe";
import {AgmCoreModule} from "@agm/core";
import {Clipboard} from "@ionic-native/clipboard";
import {Ionic2RatingModule} from "ionic2-rating";
import {KeysPipe} from "../pipes/keys.pipe";
import {InAppBrowser} from "@ionic-native/in-app-browser";
import {FlashCardComponent} from "../components/flash-card/flash-card";
import {HttpClientModule} from "@angular/common/http";


export const MODULES = [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBWc6kOtjHwnrL3bTJWG5YklwyB8SxFm8A'
    }),
    Ionic2RatingModule,
    IonicStorageModule.forRoot()
];

export const PROVIDERS = [
    AlertService,
    ToastService,
    CrudStorageProvider,
    AppState,
    Api,
    CryptocompareService,
    InAppBrowser
];

export const NATIVES = [
    SplashScreen,
    StatusBar,
    Camera,
    CallNumber,
    Crop,
    DatePicker,
    Geolocation,
    PhotoLibrary,
    Push,
    BarcodeScanner,
    GoogleMaps,
    Clipboard
];

export const COMPONENTS = [
  FlashCardComponent
];

export const DIRECTIVES = [
    Autosize,
    InvokeDirective
];

export const PIPES = [
    CapitalizePipe,
    DistancePipe,
    KeysPipe
];
