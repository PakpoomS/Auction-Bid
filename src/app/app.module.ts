import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

//server
import { AngularFireModule} from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule, } from 'angularfire2/database-deprecated';


var config = {
  apiKey: "AIzaSyDOS9kv6bD3ZGx0o51t1Z56ocIEwG0e8YQ",
  authDomain: "auction-bid-1a4ec.firebaseapp.com",
  databaseURL: "https://auction-bid-1a4ec.firebaseio.com",
  projectId: "auction-bid-1a4ec",
  storageBucket: "auction-bid-1a4ec.appspot.com",
  messagingSenderId: "464150219353"
};

//Page
import { PagePage } from '../pages/page/page';
import { SignupPage } from '../pages/signup/signup';
import { LoginPage } from '../pages/login/login';
import { Main1Page } from '../pages/main1/main1';
import { Signup2Page} from '../pages/signup2/signup2';
import { ModifyUserPage } from '../pages/modify-user/modify-user';
import { MainBidPage } from '../pages/main-bid/main-bid';
import { MainSellPage } from '../pages/main-sell/main-sell';
import { AddItemPage } from '../pages/add-item/add-item';


//API Device
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from'@ionic-native/camera';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Network } from '@ionic-native/network';

@NgModule({
  declarations: [
    MyApp,
    PagePage,
    SignupPage,
    LoginPage,
    Main1Page,
    Signup2Page,
    ModifyUserPage,
    MainBidPage,
    MainSellPage,
    AddItemPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp,{
      platform:{
        ios:{
          StatusBarPadding:true
        }
      }
    }),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    IonicImageViewerModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PagePage,
    SignupPage,
    LoginPage,
    Main1Page,
    Signup2Page,
    ModifyUserPage,
    MainBidPage,
    MainSellPage,
    AddItemPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network
  ]
})
export class AppModule {}