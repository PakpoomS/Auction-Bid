import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Main1Page } from '../main1/main1';

import { Profile } from '../../model/user';
/**
 * Generated class for the Signup2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup2',
  templateUrl: 'signup2.html',
})
export class Signup2Page {

  profile = {} as Profile;
  public token :string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private afAuth : AngularFireAuth,
              private afData : AngularFireDatabase) {
  }

  saveProfile(){
    this.afAuth.authState.take(1).subscribe(auth =>{
        this.afData.object(`profile/${auth.uid}`).set(this.profile)
        .then(() =>this.navCtrl.setRoot(Main1Page));
        localStorage.setItem('token',this.token)
    })
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup2Page');
  }

}
