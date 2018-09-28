import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  data:Observable<any>;
  items:any;
  url:string;

  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.url = 'https://jsonplaceholder.typicode.com/photos?_limit=3';
    this.getData();
  }

  getData(){
    this.data = this.http.get(this.url)
    this.data.subscribe(data => {
      this.items = data;
    });
  }

  // doInfinite(infiniteScroll) {
  //   console.log('Begin async operation');
  //   this.data = this.http.get(this.url)
  //   this.data.subscribe(data => {
  //     this.items = this.items.concat(data);
  //     infiniteScroll.complete();
  //   });  
  // }

  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

      this.data.subscribe(data => {
       this.items = data;
      refresher.complete();
    });
  }

}
