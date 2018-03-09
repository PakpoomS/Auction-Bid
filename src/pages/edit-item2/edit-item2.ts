import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';
import { AngularFireDatabase , FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Camera , CameraOptions } from '@ionic-native/camera';
/**
 * Generated class for the EditItem2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-item2',
  templateUrl: 'edit-item2.html',
})
export class EditItem2Page {
  itemData : FirebaseObjectObservable <any>
  private base64Img :string
  public item;
  public dbServer;
  public dbServer2;
  public dbImg;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public afData : AngularFireDatabase,
              private camera : Camera,
              private alertCtrl : AlertController) {
  }

  ionViewDidLoad() {
    this.dbImg = [];
    this.item = this.navParams.get('item') 
    this.dbServer = this.afData.object(`item/${this.item.$key}`)
    this.dbServer2 = this.afData.object(`item/${this.item.$key}/img`)
    this.dbImg = this.item.img;
    console.log(this.dbServer2);
    console.log('ionViewDidLoad EditItem2Page');
  }

  takePhoto(){
    let options:CameraOptions = {
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      encodingType: this.camera.EncodingType.JPEG,
      saveToPhotoAlbum: false,
      correctOrientation: true
      }
      this.camera.getPicture(options).then((imageData)=>{
        this.base64Img = 'data:image/jpeg;base64,'+imageData;
        this.dbServer.img.push(this.base64Img);
        this.dbServer.img.reverse();
      },(err)=>{
        //handle error
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
      this.camera.getPicture(options).then((imageData)=>{
        this.base64Img = 'data:image/jpeg;base64,'+imageData;
        this.dbImg.push(this.base64Img);
        this.dbImg.reverse();
      },(err)=>{
        //handle error
      }); 
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
                .dbImg
                .splice(index, 1);
              //return true;
            }
          }
        ]
      });
    confirm.present();
  }
  save(itemData : any){
    this.dbServer.update(itemData);
    this.dbServer2.set(this.dbImg)
    this.navCtrl.pop();
    alert('บันทึกเรียบร้อย')
  }
  delete(){
    let alertMe = this
    .alertCtrl
    .create({
      title : 'คุณต้องการลบข้อมูลนี้ใช่หรือไม่ ? ',
      buttons:[
        {
          text : 'ยกเลิก',
          handler:() =>{
            console.log('ยกเลิก')
          }
        },{
          text : 'ตกลง',
          handler:() =>{
            this.dbServer.remove();
            this.navCtrl.pop();
          }
        }
      ]
    });
    alertMe.present();
  }
}
