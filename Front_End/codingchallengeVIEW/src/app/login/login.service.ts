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
  ///api/user/authenticate/:email&:password'
  console.log("URL to authenticate 1111111111111 : "  + API_URLS.USER_URL+'authenticate/'+user.email+'&'+user.password);
    return this.http.get('http://localhost:3000/api/user/authenticate/iazzi3@gmail.com&123'/*API_URLS.USER_URL+'authenticate/'+user.email+'&'+ user.password*/);
}

getUserById(id:string){
  return this.http.get(API_URLS.USER_URL+ '/:' + id);
}


}
