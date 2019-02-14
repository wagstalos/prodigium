import { PoliticaPage } from './../politica/politica';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //rootPage = HomePage;
  constructor(public navCtrl: NavController) {

  }
  abrirPolitica() {
    this.navCtrl.push(PoliticaPage);
  }
  // openPage(PoliticaPage){
  //   this.navCtrl.push(PoliticaPage);
  // }
  /*OpenUrl() {
    window.open("http://google.com",'_system', 'location=yes');
    browser.show()
  }*/
}
