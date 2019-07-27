import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authenticateService';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  id: string;
  button_action:string;
  constructor(private router: Router,public authService: AuthService) {

    
   }

  ngOnInit() {
    this.id = localStorage.getItem('token');
    this.button_action = 'shop';
  }

  logout(): void {
    console.log("Logout"); 
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  shopAction(){
    this.button_action = 'shop';
  }

  preferedShopAction(){
    this.button_action = 'preferedShop';
  }

}
