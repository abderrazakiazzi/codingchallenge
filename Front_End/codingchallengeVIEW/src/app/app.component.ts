import { Component, OnInit } from '@angular/core';
import { User } from './shared/user';
import { LoginService } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'codingchallengeVIEW';
  user:User;
  router: any;

constructor(private loginservice:LoginService){

}

ngOnInit(){
   this.user = new User('jdjh', 'jsdjd', 'skjskd', new Date());
}






}
