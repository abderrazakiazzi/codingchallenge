import {Injectable } from '@angular/core';
import {HttpClient}  from '@angular/common/http';
//import {Observable} from 'rxjs/Observable';
import {Observable } from 'rxjs/internal/Observable';


import {API_URLS} from '../config/config';
import {User} from '../shared/user';

@Injectable()
export class LoginService {

constructor(private http: HttpClient){
}

getUsers(): Observable<any>{
  return this.http.get(API_URLS.USERS_URL);
}

addUser(user: User): Observable<any>{
 return this.http.post(API_URLS.USERS_URL+ '/create', user);
}

authenticate(user:User){
    return this.http.get(API_URLS.USER_URL+'/authenticate?'+'email='+user.email+'&'+'password='+user.password);
}

getUserById(id:string){
  return this.http.get(API_URLS.USER_URL+ '/:' + id);
}


}
