import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainBidPage } from '../main-bid/main-bid'
import { WinBidPage } from '../win-bid/win-bid'
import { FavoritePage } from '../favorite/favorite'
import { BidNowPage } from '../bid-now/bid-now'
/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  constructor(public navCtrl : NavController){

  }
  mainbid = MainBidPage;
  winBid = WinBidPage;
  favorite = FavoritePage;
  bidNow = BidNowPage;
  Back(){
    this.navCtrl.pop();
  }
}
