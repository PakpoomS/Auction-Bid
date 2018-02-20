import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MainSellPage } from './main-sell';

@NgModule({
  declarations: [
    MainSellPage,
  ],
  imports: [
    IonicPageModule.forChild(MainSellPage),
  ],
})
export class MainSellPageModule {}
