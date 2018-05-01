import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FavoritePage } from './favorite';
import { PipesModule } from '../../pipes/pipes.module';

@NgModule({
  declarations: [
    FavoritePage,
  ],
  imports: [
    IonicPageModule.forChild(FavoritePage),
    PipesModule
  ],
})
export class FavoritePageModule {}
