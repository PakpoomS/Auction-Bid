import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Item } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Profile } from '../../model/user';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { PagePage} from '../page/page';
import { ModifyUserPage } from'../modify-user/modify-user';
import { MainBidPage } from '../main-bid/main-bid';
import { MainSellPage } from '../main-sell/main-sell';
import { TabsPage } from '../tabs/tabs'
import { FCM } from '@ionic-native/fcm'


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


  profile = {} as Profile;

  public token;
  public uid;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth : AngularFireAuth,
    private afData : AngularFireDatabase,
    private toast : ToastController,
    private fcm : FCM) {
}

  ionViewDidLoad() {
    this.afAuth.authState.take(1).subscribe(data=>{
      if (data && data.email && data.uid) {
        this.profileData = this.afData.object(`profile/`+data.uid)
        this.toast.create({
          message : `Welcome To Auction-Bid : ${data.email}`,
          duration : 4000
        }).present();
        this.fcm.getToken().then(token=>{
          this.token = token;
          this.uid = data.uid;
          this.afData.object(`profile/${data.uid}/token`).set(token)
        })     
    }
      else{
        console.log('error')
      }
  })
  }
  
  signout(){
      if(confirm('คุณต้องการออกจากระบบหรือไม่ ?')){
        this.afAuth.auth.signOut();
        this.navCtrl.setRoot(PagePage);
        localStorage.removeItem('token');
        this.afData.object(`profile/${this.uid}/token`).remove();
      }
  }

  gotoBid(){
    this.navCtrl.push(TabsPage);
  }
  gotoSell(){
    this.navCtrl.push(MainSellPage);
  }
  
  gotoModify(){
    this.navCtrl.push(ModifyUserPage);
  }

}
