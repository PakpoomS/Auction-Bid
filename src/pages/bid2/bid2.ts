import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Item } from '../../model/user'
/**
 * Generated class for the Bid2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bid2',
  templateUrl: 'bid2.html',
})
export class Bid2Page {
  public id;
  item = {} as Item
  public titlename;
  public img = [] ;
  public img2;
  public dbServer ;
  public dbServer2;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afData : AngularFireDatabase) {
  }

  ionViewDidLoad() {
  this.id = this.navParams.get('item');
  this.dbServer = this.afData.object(`item/${this.id.$key}`)
  this.dbServer2 = this.afData.object(`profile/${this.id.UID}`)
  this.item.name = this.id.name;
  this.img = this.id.img ;
  this.img2 = this.dbServer2.Img;
  console.log(this.img2);
  }

}
