import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , Grid, Tabs } from 'ionic-angular';

import { AngularFireDatabase , FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';

import { User } from "../../model/user";
import { Item } from "../../model/user";

import { Bid2Page } from '../bid2/bid2'
import { Main1Page } from '../main1/main1';
import {TabsPage} from '../tabs/tabs'

/**
 * Generated class for the BidNowPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bid-now',
  templateUrl: 'bid-now.html',
})
export class BidNowPage {
  user = {} as User;
  item = {} as Item;
  public dbServer ;
  public dbServer2;
  public dbimgServer ;
  public test;
  public dbRef;
  public dbRef2 = [];
  public uidUser;
  public filed = [];
  public now;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afData : AngularFireDatabase,
              public afAuth : AngularFireAuth) {
  }

  ionViewDidEnter() {
    this.filed =[];
    setInterval (()=>{
      this.now = new Date().getTime();
    },1000)  
    this.afAuth.authState.subscribe(auth=>{
    this.uidUser = auth.uid
    this.dbRef=[];
    this.dbServer = this.afData.list('/item')
    this.dbServer2 = this.afData.list(`profile/${auth.uid}/bid`)
    this.afData.list('/item').subscribe((data)=>{
      this.dbRef = data;
    });
    this.dbServer2.subscribe((data2)=>{
      this.dbRef2 = data2;
      let i
        for(i=0;i<this.dbRef2.length ; i++){
        console.log(this.dbRef2[i].$value)
        this.filed.push(this.dbRef2[i].$value)
      }
    })
  })
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
