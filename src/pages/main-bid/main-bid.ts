import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Grid, Tabs } from 'ionic-angular';
import { AngularFireDatabase , FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from "../../model/user";
import { Item } from "../../model/user";

import { Bid2Page } from '../bid2/bid2'
import { Main1Page } from '../main1/main1';
import {TabsPage} from '../tabs/tabs'

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
  public uidUser;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afData : AngularFireDatabase,
              public afAuth : AngularFireAuth) {
  }

  ionViewDidLoad(){
    this.afAuth.authState.subscribe(auth=>{
      this.uidUser = auth.uid
    })
    this.dbRef=[];
    this.dbServer = this.afData.list('/item')
    this.afData.list('/item').subscribe((data)=>{
      this.dbRef = data;
    });
  }
  Back(){
    this.navCtrl.setRoot(Main1Page);
  }
  gotoBid2(item){
    this.navCtrl.push(Bid2Page,{
      item : item
    });
  }
}
  
