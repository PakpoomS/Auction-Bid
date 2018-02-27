import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Camera , CameraOptions } from '@ionic-native/camera';
import { Item } from '../../model/user';

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
    this.imgA = [];
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
    this.afAuth.authState.take(1).subscribe(auth=>{
      this.Item.UID = auth.uid;
      this.afData.list('/item/').push(this.Item).push(this.imgA)
      alert('บันทึกเรียบร้อย')
    }),(err) =>{
      console.log(err)
    }
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

  deletePhoto2(index) {
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
