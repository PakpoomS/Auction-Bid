import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WaitBidPage } from './wait-bid';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    WaitBidPage,
  ],
  imports: [
    IonicPageModule.forChild(WaitBidPage),
    PipesModule
  ],
})
export class WaitBidPageModule {}
