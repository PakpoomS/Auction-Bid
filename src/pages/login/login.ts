import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';
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
              private afAuth: AngularFireAuth) {
  }

  async login(user: User){
    try{
     const result = await this.afAuth.auth.signInWithEmailAndPassword(user.userid,user.pass);
     if(result){
      localStorage.setItem('token', this.token);
      this.navCtrl.setRoot(Main1Page);
      alert('ยินดีต้อนรับ');
     }
     else{
      alert('รหัสผ่านไม่ถูกต้อง');
     }
      }
     catch(e){
       console.error(e);
       alert('รหัสผ่านไม่ถูกต้อง');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  Back(){
    this.navCtrl.pop();
  }

}
