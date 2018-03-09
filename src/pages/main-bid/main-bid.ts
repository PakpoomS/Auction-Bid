import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Grid } from 'ionic-angular';
import { AngularFireDatabase , FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import { User } from "../../model/user";
import { Item } from "../../model/user";

import { Bid2Page } from '../bid2/bid2'

/**
 * Generated class for the MainBidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main-bid',
  templateUrl: 'main-bid.html',
})
export class MainBidPage {
  
  user = {} as User;
  item = {} as Item;
  public dbServer ;
  public dbimgServer ;
  public test;
  public dbRef;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afData : AngularFireDatabase) {
  }

  ionViewDidLoad(){
    this.dbRef=[];
    this.dbServer = this.afData.list('/item')
    this.afData.list('/item').subscribe((data)=>{
      this.dbRef = data;
    });
  }
  Back(){
    this.navCtrl.pop();
  }
  gotoBid2(item){
    this.navCtrl.push(Bid2Page,{
      item : item
    });
  }
}
  
