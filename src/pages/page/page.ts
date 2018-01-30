import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-page',
  templateUrl: 'page.html'
})
export class PagePage {

  constructor(public navCtrl: NavController) {}
  SignUp(){
    this.navCtrl.push(SignupPage);
  }
  Login(){
    this.navCtrl.push(LoginPage);
  }
}
