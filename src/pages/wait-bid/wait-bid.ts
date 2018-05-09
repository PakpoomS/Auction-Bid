import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
import { Bid2Page } from '../bid2/bid2'
 
/**
 * Generated class for the WaitBidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wait-bid',
  templateUrl: 'wait-bid.html',
})
export class WaitBidPage {
  public dbServer ;
  public dbimgServer ;
  public test;
  public dbRef;
  public uidUser;
  public now ;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afData : AngularFireDatabase,
              public afAuth : AngularFireAuth) {
  }

  ionViewDidLoad() {
    setInterval(()=>{
      this.now = new Date().getTime();
    },1000)
    this.afAuth.authState.subscribe(auth=>{
      this.uidUser = auth.uid
    })
    this.dbRef=[];
    this.dbServer = this.afData.list('/item')
    this.afData.list('/item').subscribe((data)=>{
      this.dbRef = data;
    });
  }
  gotoBid2(item){
    this.navCtrl.push(Bid2Page,{
      item : item
    });
  }

}
