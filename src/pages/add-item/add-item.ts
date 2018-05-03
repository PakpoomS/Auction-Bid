import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Camera , CameraOptions } from '@ionic-native/camera';
import { Item } from '../../model/user';
import * as moment from 'moment';
/**
 * Generated class for the AddItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
  Item = {} as Item;
  private base64Img :string;
  public imgA ;
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afData : AngularFireDatabase,
              public afAuth : AngularFireAuth,
              private camera : Camera,
              private alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    this.Item.timeClosed = moment().format();
    this.imgA = [];
    this.afAuth.authState.subscribe(auth=>{
    this.afData.object(`profile/${auth.uid}`).subscribe(data =>{
      this.Item.nameOpen = data.name;
      console.log('add-Item')
    })
  })
  }
  
  takePhoto(){
    let options:CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
      correctOrientation: true
      }
      this.camera.getPicture(options).then((imageData) => {
        this.base64Img = 'data:image/jpeg;base64,' + imageData;
        this.imgA.push(this.base64Img);
        this.imgA.reverse();
      }, (err) => {
      // Handle error
      });
  }
  takePhotoAlbum(){
    let options:CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
      correctOrientation: true
      }
      this.camera.getPicture(options).then((imageData) => {
        this.base64Img = 'data:image/jpeg;base64,' + imageData;
        this.imgA.push(this.base64Img);
        this.imgA.reverse();
      }, (err) => {
      // Handle error
      });
  }
  
  save(){
    const Now = new Date().getTime();
    const date = new Date(this.Item.timeClosed).getTime();
    console.log(date);
    this.Item.timeClosed = date;
    if(this.Item.priceStart == null || this.Item.priceBid  == null){
      console.log('ราคาสินค้าการเปิดประมูล และ ขั้นต่ำ ไม่สามารถเป็นค่าว่างได้');
      alert('ราคาสินค้าการเปิดประมูล และ ขั้นต่ำ ไม่สามารถเป็นค่าว่างได้');
    }else if ( Now > date){
      console.log('คุณตั้งค่าเวลาไม่ถูกต้อง');
      alert('คุณตั้งค่าเวลาไม่ถูกต้อง');
    }else{
     this.afAuth.authState.subscribe(auth =>{
       this.Item.UID = auth.uid;
       this.Item.priceStatus = this.Item.priceStart;
       this.Item.Status = 'เปิดประมูล';
       this.Item.Delivery = 'รอการชำระเงิน';
       this.afData.list('/item/').push(this.Item).ref.child('/img').set(this.imgA)
       alert('บันทึกข้อมูลเรียบร้อย')
       this.navCtrl.pop();
     }),(err)=>{
       alert('การบันทึกมีปัญหากรุณาลองใหม่อีกครั้ง')
     }
    }
    /*  let x = parseInt(this.Item.priceStart)*1;
    let y = parseInt(this.Item.priceEnd)*1;
    console.log(this.Item.priceStart);
    console.log(this.Item.priceEnd);
    if(this.Item.catItem && this.Item.priceStart && this.Item.priceBid != null){
      if(x < y){
      this.afAuth.authState.subscribe(auth=>{
        this.Item.UID = auth.uid;
        this.Item.priceStatus = this.Item.priceStart;
        this.Item.Delivery = 'กำลังประมูล';
        this.Item.Status = 'เปิดการประมูล';
        this.afData.list('/item/').push(this.Item).ref.child('/img').set(this.imgA)
        alert('บันทึกเรียบร้อย')
        this.navCtrl.pop();
      }),(err) =>{
        alert('การบันทึกมีปัญหากรุณาลองใหม่อีกครั้ง')
        console.log(err)
      }}else{
        alert('ราคาปิดประมูลไม่ควรน้อยกว่าราคาเปิดประมูล')
      }
    }else{
      alert('ตั้งค่าบิทไม่ถูกต้องกรุณาตั้งใหม่อีกครั้ง')
    }*/
  }
  deletePhoto(index) {
    let confirm = this
      .alertCtrl
      .create({
        title: 'คุณต้องการลบภาพนี้ใช่หรือไม่ ?',
        message: '',
        buttons: [
          {
            text: 'ยกเลิก',
            handler: () => {
              console.log('Disagree clicked');
            }
          }, {
            text: 'ตกลง',
            handler: () => {
              console.log('Agree clicked');
              this
                .imgA
                .splice(index, 1);
              //return true;
            }
          }
        ]
      });
    confirm.present();
  }
}
