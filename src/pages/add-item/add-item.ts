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
    this.afAuth.authState.subscribe(auth=>{
    this.afData.object(`profile/${auth.uid}`).subscribe(data =>{
      this.Item.nameS = data.name;
      console.log(this.Item.nameS)
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
    this.afAuth.authState.subscribe(auth=>{
      this.Item.UID = auth.uid;
      this.afData.list('/item/').push(this.Item).ref.child('/img').set(this.imgA)
      alert('บันทึกเรียบร้อย')
      this.navCtrl.pop();
    }),(err) =>{
      alert('การบันทึกมีปัญหากรุณาลองใหม่อีกครั้ง')
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
}
