import { Component, OnInit } from '@angular/core';
import { Shop } from '../Shared/shops';
import { ShopService } from '../services/shop.service';
import { PreferedShop } from '../Shared/preferedShop';
declare const myfunction: any;
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],

})
export class ShopComponent implements OnInit {
  shops:Shop[];

  constructor(private shopservice: ShopService) {
    console.log('test test ');
    this.loadShops();
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

  

  LikeShop(shop:Shop):void {
    let preferedShop  = new PreferedShop();
    preferedShop.id_shop = shop._id;
    this.shopservice.likeShop(preferedShop).subscribe(
     data => {console.log('great')}, error => {console.log('an error was occured')},
      () => {console.log('loading shops was done. yesy ')}
    );
  }


}
