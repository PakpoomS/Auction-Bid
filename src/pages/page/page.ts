import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { Facebook } from '@ionic-native/facebook'

@Component({
  selector: 'page-page',
  templateUrl: 'page.html'
})
export class PagePage {
  private userProfile : any = null;
  constructor(public navCtrl: NavController,
              private afAuth: AngularFireAuth) {}
  SignUp(){
    this.navCtrl.push(SignupPage);
  }
  Login(){
    this.navCtrl.push(LoginPage);
  }
  LoginFacebook(){
  
  } 
}
