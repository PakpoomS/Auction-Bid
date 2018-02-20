import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database-deprecated';
import { Main1Page } from '../main1/main1';
import { Camera , CameraOptions } from '@ionic-native/camera';

import { Profile } from '../../model/user';
/**
 * Generated class for the Signup2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup2',
  templateUrl: 'signup2.html',
})
export class Signup2Page {

  profile = {} as Profile;
  public token :string;
  public myImg: String

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private afAuth : AngularFireAuth,
              private afData : AngularFireDatabase,
              private camera : Camera) {
  }

  saveProfile(){
    this.afAuth.authState.take(1).subscribe(auth =>{
        this.afData.object(`profile/${auth.uid}`).set(this.profile)
        .then(() =>this.navCtrl.setRoot(Main1Page));
        localStorage.setItem('token',this.token)
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
        this.profile.Img = 'data:image/jpeg;base64,' + imageData;
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
          this.profile.Img = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
        // Handle error
        });
      }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Signup2Page');
  }

}
