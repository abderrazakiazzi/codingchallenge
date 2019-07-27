import { Injectable } from '@angular/core';
import { User } from '../Shared/user';
import { API_URLS } from '../config/config';
import {HttpClient}  from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private http: HttpClient) { }

  logout(): void {
    localStorage.setItem('isLoggedIn', "false");
    localStorage.removeItem('token');
    localStorage.removeItem('user_id');
  } 


  authenticate(user:User){
    return this.http.get(API_URLS.USER_URL+'/authenticate/' + `${user.email}` + '&' + `${user.password}`);
}


   addUser(user: User){
  return this.http.post(API_URLS.USERS_URL+ '/create', user);
 }

  

}
