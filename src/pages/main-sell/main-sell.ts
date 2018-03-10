import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { EditItemPage} from '../edit-item/edit-item';
import { WaitBidPage } from '../wait-bid/wait-bid';
import { WaitDeliverPage } from '../wait-deliver/wait-deliver';

/**
 * Generated class for the MainSellPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-sell',
  templateUrl: 'main-sell.html',
})
export class MainSellPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gotoAdd(){
    this.navCtrl.push(AddItemPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad MainSellPage');
  }
  gotoEdit(){
    this.navCtrl.push(EditItemPage);
  }
  gotoWait(){
    this.navCtrl.push(WaitBidPage);
  }
  gotoWaitDeliver(){
    this.navCtrl.push(WaitDeliverPage);
  }
}
