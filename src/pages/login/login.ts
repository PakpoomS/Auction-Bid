import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController , LoadingController} from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Main1Page } from '../main1/main1';


import { User } from "../../model/user";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {} as User;
  public token:string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private afAuth: AngularFireAuth,
              private alertCtrl : AlertController,
              private loading : LoadingController) {
  }

  async login(user: User){
    try{
      var loading = this.loading.create({
        content : 'กรุณารอซักครู่ ..'
      });
      loading.present();
     const result = await this.afAuth.auth.signInWithEmailAndPassword(user.userid,user.pass);
     if(result){
      localStorage.setItem('token', this.token);
      this.navCtrl.setRoot(Main1Page);
      loading.dismiss();
      alert('ยินดีต้อนรับสู่ Auction-Bid');
     }
     else{
      loading.dismiss();
      alert('รหัสผ่านไม่ถูกต้อง');
     }
      }
     catch(e){
      loading.dismiss();
       console.error(e);
       alert('รหัสผ่านไม่ถูกต้อง');
       
    }
  }

  ionViewDidLoad() {
    
  }
  Back(){
    this.navCtrl.pop();
  }
  
  forGot(){
    let alert2 = this.alertCtrl.create({
      title : 'Email ถูกส่งเรียบร้อย',
      buttons : ['OK']
  });
    let alert = this.alertCtrl.create({
      title : 'กรุณากรอก Email เพื่อส่ง Reset Password',
      inputs:[
          {
          name: 'email',
          placeholder : 'Email'
          }
      ],
      buttons:[
        {
        text : 'ยกเลิก',
        role: 'cancel',
        handler : data =>{
          console.log ('canel');
        }
        },
        {
        text : 'ตกลง',
        handler: data =>{
          this.afAuth.auth.sendPasswordResetEmail(data.email);
          alert2.present();
        } 
      }
      
      ]
    });
    alert.present();
    
  }

}
