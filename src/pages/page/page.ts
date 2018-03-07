import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import firebase from 'firebase';
import { Main1Page } from '../main1/main1';

@Component({
  selector: 'page-page',
  templateUrl: 'page.html'
})
export class PagePage {
  public token:string
  public FBname : string


  constructor(public navCtrl: NavController,
              private afAuth: AngularFireAuth,
              private afData: AngularFireDatabase) {}
  SignUp(){
    this.navCtrl.push(SignupPage);
  }
  Login(){
    this.navCtrl.push(LoginPage);
  }
  LoginFacebook(){
      this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
        res => {
          console.log(res);
          localStorage.setItem('token',this.token)
          this.FBname = res.user.displayName;
          this.navCtrl.setRoot(Main1Page,{
            name : this.FBname
          });
        }
      )
  } 
}
