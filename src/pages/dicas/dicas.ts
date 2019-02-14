import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Network } from '@ionic-native/network';

/**
 * Generated class for the DicasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dicas',
  templateUrl: 'dicas.html',
})
export class DicasPage {

  data:Observable<any>;
  items:any;
  url:string;
  toast: any;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient, private network: Network) {
    this.url = 'https://wpsgames.com.br/app/prodigium/dicas.json';
    this.getData();

    //online
    this.network.onConnect().subscribe(() => {
      console.log('network was connected :-(');
      this.toast.create({
        message: "Bem-vindo a Prodigium!",
        duration: 3000
      }).present();
    });
    //offline
    this.network.onDisconnect().subscribe(() => {
      console.log('network was disconnected :-(');
      this.toast.create({
        message: "Você precisa estar conectado para ver as novas dicas.",
        duration: 3000
      }).present();
    });
  }
  getData(){
    this.data = this.http.get(this.url)
    this.data.subscribe(data => {
    this.items = data;
    });
    }
  //   doInfinite(infiniteScroll) {
  //   console.log('Begin async operation');
  //   this.data = this.http.get(this.url)
  //   this.data.subscribe(data => {
  //     this.items = this.items.concat(data);
  //     infiniteScroll.complete();
  //   });  
  // }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
      this.data = this.http.get(this.url)
      this.data.subscribe(data => {
      this.items = data;
      refresher.complete();
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DicasPage');
  }

}
