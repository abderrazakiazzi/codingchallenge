import { Component, OnInit } from '@angular/core';
import { Shop } from '../Shared/shops';
import { ShopService } from '../services/shop.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-preferedshop',
  templateUrl: './preferedshop.component.html',
  styleUrls: ['./preferedshop.component.css']
})
export class PreferedshopComponent implements OnInit {
  shops: Shop[];
  preferedShops: Shop[];
  sizePreferedShops: number;
  //shopservice: any;

  constructor(private shopservice: ShopService, private router: Router) {

    this.loadPreferedShops();
  }

  ngOnInit() {

  }

  loadPreferedShops(): void {
    //this.shopservice.getShops().subscribe(shop=>this.shops=shop)
    this.shopservice.getPreferedShops().subscribe(
      data => {
        this.preferedShops = data;
        if (this.preferedShops != null)
          this.sizePreferedShops = this.preferedShops.length;
        else
          this.sizePreferedShops = 0;
      }, error => { console.log('an error was occured') },
      () => { console.log('loading shops was done. ') }
    );
  }

  removePreferedShop(shop: Shop): void {
    let shop_item = new Shop();
    shop_item = shop;
    console.log(' id of shop to remove = ' + shop_item._id);
    this.shopservice.removePreferedShop(shop_item).subscribe(
      data => { console.log('great') }, error => { console.log('an error was occured') },
      () => {
        console.log('succes for dislike shop. ');
        this.loadPreferedShops();
        this.router.navigate(['/dashboard']);
      }
    );
  }

}
