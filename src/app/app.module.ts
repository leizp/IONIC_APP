import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';

import { SpacePage } from '../pages/space/space';
import { RecordPage } from '../pages/record/record';
import { TreePage } from '../pages/tree/tree';
import { ManagerPage } from '../pages/manager/manager';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    SpacePage,
    RecordPage,
    TreePage,
    ManagerPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SpacePage,
    RecordPage,
    TreePage,
    ManagerPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
