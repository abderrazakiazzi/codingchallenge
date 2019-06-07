import { Component, OnInit } from '@angular/core';
import { Shop } from '../Shared/shops';
import { ShopService } from './shop.service';
declare const myfunction: any;
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],

})
export class ShopComponent implements OnInit {
  shops:Shop[];
  preferedShops:Shop[];

  constructor(private shopservice: ShopService) {
    console.log('test test ');

    this.loadShops();
    this.loadPreferedShops();
   }

   Onclick(){
     myfunction();
   }

  ngOnInit() {
    //myfunction();
  }

 
  loadShops():void {
    //this.shopservice.getShops().subscribe(shop=>this.shops=shop)
    this.shopservice.getShops().subscribe(
      data=>{this.shops = data},error => {console.log('an error was occured')},
      () => {console.log('loading shops was done. ')}
    );
  }

  loadPreferedShops():void {
    //this.shopservice.getShops().subscribe(shop=>this.shops=shop)
    this.shopservice.getPreferedShops().subscribe(
      data=>{this.preferedShops = data},error => {console.log('an error was occured')},
      () => {console.log('loading shops was done. ')}
    );
  }

  LikeShop(shop:Shop):void {
    //this.shopservice.getShops().subscribe(shop=>this.shops=shop)
    this.shopservice.likeShop(shop).subscribe(
     data => {console.log('great')}, error => {console.log('an error was occured')},
      () => {console.log('loading shops was done. ')}
    );
  }
}
