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
import { TabsPage } from '../pages/tabs/tabs'; //หน้าแท๊บรวมการประมูล
import { PagePage } from '../pages/page/page'; //หน้าแรก
import { SignupPage } from '../pages/signup/signup'; // หน้าสมัครสมาชิก
import { LoginPage } from '../pages/login/login'; // หน้าล๊อกอิน
import { Main1Page } from '../pages/main1/main1'; // หน้าหลัก
import { Signup2Page} from '../pages/signup2/signup2'; // หน้าสมัครสมาชิก 2 
import { ModifyUserPage } from '../pages/modify-user/modify-user'; // หน้าแก้ไขข้อมูลส่วนตัว
import { MainBidPage } from '../pages/main-bid/main-bid'; // หน้าการหลักการประมูล
import { MainSellPage } from '../pages/main-sell/main-sell'; // หน้าหลักการขาย
import { AddItemPage } from '../pages/add-item/add-item';
import { EditItemPage } from '../pages/edit-item/edit-item';
import { EditItem2Page } from '../pages/edit-item2/edit-item2';
import { Bid2Page } from '../pages/bid2/bid2';
import { WinBidPage } from '../pages/win-bid/win-bid';
import { WaitBidPage } from '../pages/wait-bid/wait-bid';
import { WaitDeliverPage } from '../pages/wait-deliver/wait-deliver';
import { FavoritePage } from '../pages/favorite/favorite'
import { BidNowPage } from '../pages/bid-now/bid-now'



//API Device
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from'@ionic-native/camera';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { Network } from '@ionic-native/network';

//Pipe
import { DatePipe } from '../pipes/date/date'
import { ReversePipe } from '../pipes/reverse/reverse'
import { BidPipe } from '../pipes/bid/bid'

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
    AddItemPage,
    EditItemPage,
    EditItem2Page,
    Bid2Page,
    WinBidPage,
    TabsPage,
    WaitBidPage,
    WaitDeliverPage,
    FavoritePage,
    BidNowPage,
    DatePipe,
    ReversePipe,
    BidPipe
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
    AddItemPage,
    EditItemPage,
    EditItem2Page,
    Bid2Page,
    WinBidPage,
    TabsPage,
    WaitBidPage,
    WaitDeliverPage,
    FavoritePage,
    BidNowPage,
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