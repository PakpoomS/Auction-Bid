import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import {Item} from '../../model/user'
/**
 * Generated class for the WaitDeliver2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wait-deliver2',
  templateUrl: 'wait-deliver2.html',
})
export class WaitDeliver2Page {
  public id; 
  item = {} as Item;
  public dbServer
  public dbServer2
  public img =[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afAuth : AngularFireAuth,
              public afData : AngularFireDatabase) {
  }


ionViewDidLoad() {
    this.id = this.navParams.get('item');
    this.img = this.id.img;
    console.log(this.id.$key);
    this.item.name = this.id.name;
    this.dbServer = this.afData.object(`item/${this.id.$key}`)
    this.dbServer2 = this.afData.object(`profile/${this.id.winUID}`)
    
  }
save(itemdata : any){
  this.dbServer.update(itemdata);
  alert('update สถานะสินค้าเรียบร้อย')
  this.navCtrl.pop();
}

}
