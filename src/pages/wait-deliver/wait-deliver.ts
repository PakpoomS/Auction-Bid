import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the WaitDeliverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wait-deliver',
  templateUrl: 'wait-deliver.html',
})
export class WaitDeliverPage {
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

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(auth=>{
      this.uidUser = auth.uid
    })
    this.dbRef=[];
    this.dbServer = this.afData.list('/item')
    this.afData.list('/item').subscribe((data)=>{
      this.dbRef = data;
    });
  }

}
