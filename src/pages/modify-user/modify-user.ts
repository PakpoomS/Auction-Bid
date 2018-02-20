import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , FirebaseObjectObservable } from 'angularfire2/database-deprecated';

import { Profile } from '../../model/user'

/**
 * Generated class for the ModifyUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-user',
  templateUrl: 'modify-user.html',
})
export class ModifyUserPage {

  profileData : FirebaseObjectObservable<Profile>

  public profile
  public dbServer;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth : AngularFireAuth,
    private afData : AngularFireDatabase) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyUserPage');
    this.afAuth.authState.subscribe( auth =>{
    this.dbServer = this.afData.object(`profile/${auth.uid}`)
    })
    }
  save(profiledata : any){
    this.dbServer.update(profiledata);
    this.navCtrl.pop();
    alert('บันทึกเรียบร้อย')
  }
}

