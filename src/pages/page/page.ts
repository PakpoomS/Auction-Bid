import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import firebase from 'firebase';
import { Main1Page } from '../main1/main1';
import { FCM } from '@ionic-native/fcm';

@Component({
  selector: 'page-page',
  templateUrl: 'page.html'
})
export class PagePage {


  constructor(public navCtrl: NavController,
              private afAuth: AngularFireAuth,
              private afData: AngularFireDatabase,
              public fcm : FCM) {}
  SignUp(){
    this.navCtrl.push(SignupPage);
  }
  Login(){
    this.navCtrl.push(LoginPage);
  }
}
