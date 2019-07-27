import {Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';



import {API_URLS} from '../config/config';
import {Shop} from '../shared/shops';
import { PreferedShop } from '../Shared/preferedShop';

@Injectable()
export class ShopService {


constructor(private http: HttpClient){
}

getShops(){

  return this.http.get<Shop[]>(API_URLS.SHOPS_URL );
}

getPreferedShops(){
  console.log(' prefered shop user id  = '+ localStorage.getItem('user_id'));
  return this.http.get<Shop[]>(API_URLS.PREFERED_SHOPS_URL + '/'+ localStorage.getItem('user_id'));
}

addShop(shop: Shop){
 return this.http.post(API_URLS.USERS_URL+ '/create', shop);
}


likeShop(shop:PreferedShop){
  console.log(API_URLS.SHOPS_URL+ '/like/'+  shop._id + '&' + localStorage.getItem('user_id'));
  shop.id_user = localStorage.getItem('user_id'); // '5cdb5778c5b0f133d8a4061b';
  return this.http.post(API_URLS.SHOPS_URL+ '/like', shop);
}

removePreferedShop(shop:Shop){
  console.log(' the shop dislike : ' + shop._id)
return this.http.post(API_URLS.PREFERED_SHOPS_URL+'/dislike', shop);
}

}
