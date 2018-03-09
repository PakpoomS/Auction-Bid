import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the WinBidPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-win-bid',
  templateUrl: 'win-bid.html',
})
export class WinBidPage {
  public uidUser 
  public emailUser;
  public dbServer;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afData : AngularFireDatabase,
              public afAuth : AngularFireAuth) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(auth=>{
      this.emailUser = auth.email
      this.uidUser = auth.uid
    })
    this.dbServer = this.afData.list('/item')

  }
  

}
