import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase , FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Camera , CameraOptions } from '@ionic-native/camera';

import { Profile } from '../../model/user'

/**
 * Generated class for the ModifyUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modify-user',
  templateUrl: 'modify-user.html',
})
export class ModifyUserPage {

  profileData : FirebaseObjectObservable<Profile>

  profile = {} as Profile;
  public dbServer;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private afAuth : AngularFireAuth,
    private afData : AngularFireDatabase,
    private camera : Camera) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModifyUserPage');
    this.afAuth.authState.subscribe( auth =>{
    this.dbServer = this.afData.object(`profile/${auth.uid}`)
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
  
  save(profiledata : any){
    this.dbServer.update(profiledata);
    this.navCtrl.pop();
    alert('บันทึกเรียบร้อย')
  }
  updatePhoto(profiledata : any){
    this.dbServer.update(profiledata);
    alert('บันทึกรูปเรียบร้อย')
  }
}

