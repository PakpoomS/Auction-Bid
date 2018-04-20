import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainBidPage } from './main-bid';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    MainBidPage,
  ],
  imports: [
    IonicPageModule.forChild(MainBidPage),
    PipesModule
  ],
})
export class MainBidPageModule {}
