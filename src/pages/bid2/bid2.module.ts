import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bid2Page } from './bid2';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    Bid2Page,
  ],
  imports: [
    IonicPageModule.forChild(Bid2Page),
    PipesModule
  ],
})
export class Bid2PageModule {}
