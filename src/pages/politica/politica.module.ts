import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PoliticaPage } from './politica';

@NgModule({
  declarations: [
    PoliticaPage,
  ],
  imports: [
    IonicPageModule.forChild(PoliticaPage),
  ],
})
export class PoliticaPageModule {}
