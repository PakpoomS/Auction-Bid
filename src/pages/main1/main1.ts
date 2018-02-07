import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Profile } from '../../model/user';

/**
 * Generated class for the Main1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main1',
  templateUrl: 'main1.html',
})
export class Main1Page {
 
  profileData : FirebaseObjectObservable<Profile>

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth : AngularFireAuth,
    private afData : AngularFireDatabase) {
}

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(data=>{
      if (data && data.email && data.uid) {
      
        this.profileData = this.afData.object(`profile/`+data.uid)
    }
  
      else{
        console.log('error')
      }
  })

  }
}
