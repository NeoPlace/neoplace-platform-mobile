import {SharedModule} from './shared.module';
import {enableProdMode, ErrorHandler, NgModule} from '@angular/core'; //enableProdMode : make development faster
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';

import {MODULES, NATIVES, PROVIDERS} from './app.imports';

// this is the magic wand
enableProdMode();

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    MODULES,
    IonicModule.forRoot(MyApp),
    SharedModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PROVIDERS,
    NATIVES,
  ]
})
export class AppModule {}

