import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
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
  public dbBid;
  public titlename;
  public img = [] ;
  public img2;
  public dbServer ;
  public dbServer2;
  public dbServerBid;
  public bid;
  public bidStatus;
  public priceStatus;
  public priceEnd;
  public nameAuth;

  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afData : AngularFireDatabase,
              public afAtuh : AngularFireAuth) {
  }

  ionViewDidLoad() {
    this.afAtuh.authState.subscribe(auth=>{
      this.nameAuth = auth.email
    })
  this.id = this.navParams.get('item');
  this.dbServer = this.afData.object(`item/${this.id.$key}`)
  this.dbServer2 = this.afData.object(`profile/${this.id.UID}`)
  this.afData.object(`item/${this.id.$key}`).subscribe((data)=>{
    console.log(data.priceBid)
    this.priceEnd = parseInt(data.priceEnd)*1;
    this.dbBid = parseInt(data.priceBid)*1;
    this.priceStatus = parseInt(data.priceStatus)*1;
  })
  this.item.name = this.id.name;
  this.img = this.id.img ;
  this.img2 = this.dbServer2.Img;
  console.log(this.dbBid)
  }
  Bid(){
    if(this.dbBid == this.bid || this.dbBid < this.bid){
      this.bidStatus = parseInt(this.priceStatus)+parseInt(this.bid);
      console.log(this.bidStatus)
      this.afData.object(`item/${this.id.$key}/priceStatus`).set(this.bidStatus);
      this.afData.object(`item/${this.id.$key}/winBid`).set(this.nameAuth);
      alert('ประมูลเรียบร้อย')
    if(this.bidStatus == this.priceEnd ||this.bidStatus >= this.priceEnd  ){
      this.afData.object(`item/${this.id.$key}/Status`).set('ปิดการประมูล');
      this.afData.object(`item/${this.id.$key}/Delivery`).set('กำลังดำเนินการ');
      alert('คุณชนะการประมูล ยินดีด้วยครับ')
      this.navCtrl.pop();
    }
    }else{
      alert('ราคาประมูลต่ำกว่า ขั้นต่ำ')
    }
  }
  BackHome(){
    this.navCtrl.pop()
  }
}
