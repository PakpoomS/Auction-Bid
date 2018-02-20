import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { Signup2Page } from '../signup2/signup2';

import { User } from "../../model/user";

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  user = {} as User;
  public pass;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams , 
              private afAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }
  async signup(user:User){
     try{
      if(user.pass == this.pass ){
      const result = await this.afAuth.auth.createUserWithEmailAndPassword(user.userid,user.pass);
      console.log(result);
      this.afAuth.auth.signInWithEmailAndPassword(user.userid,user.pass);
      alert('สมัครสมาชิกเรียบร้อย');
      this.navCtrl.push(Signup2Page);
    }else{
      alert('รหัสผ่านไม่ตรงกัน');
    }
      }
      catch(e){
      alert('การสมัครสมาชิกรูปแบบไม่ถูกต้อง')
        console.error(e);
      }
  }
  Back(){
    this.navCtrl.pop();
  }

}
