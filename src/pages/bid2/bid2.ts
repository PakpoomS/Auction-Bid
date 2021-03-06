import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController , Slides } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Item , Auction } from '../../model/user'
import { FCM } from '@ionic-native/fcm'
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

  @ViewChild('slider') slider: Slides;

  public id;
  item = {} as Item
  public dbBid;
  public titlename;
  public img = [] ;
  public img2;
  public dbServer ;
  public dbServer2;
  public dbServer3;
  public dbServerBid;
  public bid;
  public bidStatus;
  public priceStatus;
  public priceEnd;
  public nameAuth;
  public dbServerFa;
  public ref
  public ref2
  public check = false ;
  public check2 = false;
  public time;
  public now;
  public token;
  public winUID;
  public winCheck
  public UID;

  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afData : AngularFireDatabase,
              public afAuth : AngularFireAuth,
              public fcm : FCM) {
  }

  ionViewDidLoad() {
    setInterval (()=>{
      this.now = new Date().getTime();
    },1000)  
    this.ref = [];
    this.ref2 =[];
    this.afAuth.authState.subscribe(auth=>{
      this.afData.object(`profile/${auth.uid}/token`).subscribe((data4)=>{
        this.token = data4.$value;
        console.log(this.token);
      }) 
      this.afData.list(`profile/${auth.uid}/favorite`).subscribe((data2)=>{
        this.ref = data2
        console.log(this.ref)
      }) 
      this.nameAuth = auth.email
      console.log(auth.uid);
      this.winUID = auth.uid;
    })
    this.afAuth.authState.subscribe(auth=>{
      this.afData.list(`profile/${auth.uid}/bid`).subscribe((data3)=>{
        this.ref2 = data3
        console.log(this.ref2)
      }) 
    })
  
  this.id = this.navParams.get('item');
  console.log(this.id.$key);
  this.dbServer = this.afData.object(`item/${this.id.$key}`)
  this.dbServer2 = this.afData.object(`profile/${this.id.UID}`)
  this.afData.object(`item/${this.id.$key}`).subscribe((data)=>{
    console.log(data.priceBid)
    this.priceEnd = parseInt(data.priceEnd)*1;
    this.dbBid = parseInt(data.priceBid)*1;
    this.priceStatus = parseInt(data.priceStatus)*1;
    this.time = data.timeClosed;
    this.winCheck = data.winBid;
  })
  this.item.name = this.id.name;
  this.img = this.id.img ;
  this.img2 = this.dbServer2.Img;
  this.dbServer3 = this.afData.list(`auction/${this.id.$key}`)
  console.log(this.dbBid)
  }
  Bid(){
    let y = this.priceStatus + this.dbBid
    if(this.bid < this.priceStatus){
      console.log('ราคาของท่านน้อยกว่าราคา ประมูลปัจจุบัน')
      alert('ราคาของท่านน้อยกว่าราคาประมูลปัจจุบัน')
    }else if(this.bid < y ){
      console.log('ราคาของท่านน้อยกว่าการประมูลขั้นต่ำ')
      alert('กรุณาประมูลให้สูงกว่าราคาขั้นต่ำ')
    }else if (this.bid == null){
      alert('กรุณาใส่ราคาที่ท่านต้องการประมูล')
    }else if(this.time < this.now ){
      alert('หมดเวลาการประมูล')
    }else if (this.nameAuth == this.winCheck){
      alert('ท่านเป็นผู้ชนะการประมูลอยู่แล้วในปัจจุบัน')
    }
    else{
      let filed = []; 
      filed.push(this.nameAuth,this.bid,this.now);
      this.afData.list(`auction/${this.id.$key}`).push(filed)
      this.afData.object(`item/${this.id.$key}/priceStatus`).set(this.bid);
      this.afData.object(`item/${this.id.$key}/winBid`).set(this.nameAuth);
      this.afData.object(`item/${this.id.$key}/winToken`).set(this.token); // Token ส่งแจ้งเตือนผู้ใช้
      this.afData.object(`item/${this.id.$key}/winUID`).set(this.winUID);
      this.time = this.time + 15000;
      this.afData.object(`item/${this.id.$key}/timeClosed`).set(this.time);
      /*this.afData.object(`item/${this.id.$key}/priceStatus`).set(this.bid);
      this.afData.object(`item/${this.id.$key}/winBid`).set(this.nameAuth);
      filed.push(this.nameAuth,this.bid)
      this.afData.list(`item/${this.id.$key}/customer`).push(filed)*/
      let i
    for(i=0 ; i<this.ref2.length ;i++){
      console.log(this.ref2[i].$value)
      if(this.ref2[i].$value == this.id.$key){
        console.log('ซ้ำ')
        this.check2 = true;
        break;
      }
    }
    console.log(this.check)
    if(this.check2 == true){
      alert('ประมูลเรียบร้อย')
    }else{
      this.afAuth.authState.subscribe(auth=>{
      this.afData.list(`profile/${auth.uid}/bid`).push(this.id.$key)
      })
      alert('ประมูลเรียบร้อย')
    }
  }
    /* if(this.dbBid == this.bid || this.dbBid < this.bid){
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
    }*/
  }
  favorite(){
    let i
    for(i=0 ; i<this.ref.length ;i++){
      console.log(this.ref[i].$value)
      if(this.ref[i].$value == this.id.$key){
        console.log('ซ้ำ')
        this.check = true;
        break;
      }
    }
    console.log(this.check)
    if(this.check == true){
      alert('มีการบันทึกเป็นที่ชื่นชอบไว้แล้ว')
    }else{
      this.afAuth.authState.subscribe(auth=>{
      this.afData.list(`profile/${auth.uid}/favorite`).push(this.id.$key)
      alert('บันทึกเป็นที่ชื่นชอบเรียบร้อย')
      })
    }
    /*let x = []
    this.afAuth.authState.subscribe(auth=>{
     // this.afData.list(`profile/${auth.uid}/favorite`).push(this.id.$key)
      this.afData.database.ref(`profile/${auth.uid}/favorite`).once("value", snapshot=>{
        const email = snapshot.val()
        console.log(email)
        if(email == this.id.$key){
          alert('ซ้ำ')
        }
      }) 
    })*/
    
  }
  BackHome(){
    this.navCtrl.pop()
  }

  currentIndex = 0;

  nextSlide() {
    this.slider.slideNext();
  }

  previousSlide() {
    this.slider.slidePrev();
  }

  onSlideChanged() {
    this.currentIndex = this.slider.getActiveIndex();
  }
  
}
