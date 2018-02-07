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

//API Device
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    PagePage,
    SignupPage,
    LoginPage,
    Main1Page,
    Signup2Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PagePage,
    SignupPage,
    LoginPage,
    Main1Page,
    Signup2Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}