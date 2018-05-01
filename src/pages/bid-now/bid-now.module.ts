import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BidNowPage } from './bid-now';
import { PipesModule } from '../../pipes/pipes.module';
@NgModule({
  declarations: [
    BidNowPage,
  ],
  imports: [
    IonicPageModule.forChild(BidNowPage),
    PipesModule
  ],
})
export class BidNowPageModule {}
