import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SignupPage } from '../signup/signup';

@Component({
  selector: 'page-page',
  templateUrl: 'page.html'
})
export class PagePage {

  constructor(public navCtrl: NavController) {}
  SignUp(){
    this.navCtrl.push(SignupPage);
  }
}
