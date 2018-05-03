import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Network } from '@ionic-native/network';
import { FCM } from '@ionic-native/fcm'



import { PagePage } from '../pages/page/page';
import { Main1Page } from '../pages/main1/main1';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
    
    rootPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, network : Network , private fcm : FCM) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      let disconnet = network.onDisconnect().subscribe(() =>{
        alert('คุณไม่ได้เชื่อมต่ออินเตอร์เน็ต กรุณาเชื่อมต่ออินเตอร์เน็ตก่อนเข้าแอพพลิเคชั่น')
      });
      let token = localStorage.getItem('token')
      if (token) this.rootPage = Main1Page;
      else this.rootPage = PagePage;
    });
  }
  
}
