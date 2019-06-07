import {Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';



import {API_URLS} from '../config/config';
import {Shop} from '../shared/shops';

@Injectable()
export class ShopService {


constructor(private http: HttpClient){
}

getShops(){
  return this.http.get<Shop[]>(API_URLS.SHOPS_URL);
}

getPreferedShops(){
  return this.http.get<Shop[]>(API_URLS.PREFERED_SHOPS_URL);
}

addShop(shop: Shop){
 return this.http.post(API_URLS.USERS_URL+ '/create', shop);
}


likeShop(shop:Shop){
  console.log(API_URLS.SHOPS_URL+ '/like/'+  shop._id + '&' + '5cdb5778c5b0f133d8a4061b');
  return this.http.get(API_URLS.SHOPS_URL+ '/like/'+  shop._id + '&' + '5cdb5778c5b0f133d8a4061b');
}

}
