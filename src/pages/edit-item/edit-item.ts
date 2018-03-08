import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { EditItem2Page } from '../edit-item2/edit-item2'

import { User } from "../../model/user";
import { Item } from "../../model/user";
/**
 * Generated class for the EditItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-item',
  templateUrl: 'edit-item.html',
})
export class EditItemPage {

  user = {} as User;
  item = {} as Item;
  public UID;
  public dbServer ;
  public dbimgServer ;
  public test;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afAuth: AngularFireAuth,
              public afData : AngularFireDatabase) {
  }

  ionViewDidLoad() {
    this.afAuth.authState.subscribe(data=>{
        this.UID = data.uid
    })
    this.dbServer = this.afData.list('/item')
  }
  gotoEdit2(item){
    this.navCtrl.push(EditItem2Page,{
      item : item
    })
  }
}
