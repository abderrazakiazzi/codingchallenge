import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ILogin } from '../config/loginInfo';
import { User } from '../Shared/user';
import { API_URLS } from '../config/config';
import { HttpClient } from '@angular/common/http';
import {} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: ILogin = { userid: "admin", password: "admin123" };
  loginForm: FormGroup;
  registerForm:FormGroup;
  message_loging: string;
  message_register: string;
  returnUrl: string;
  constructor(private formBuilder: FormBuilder, private router: Router, private http: HttpClient, private dialog:MatDialog) { }
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userid: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.registerForm = this.formBuilder.group({
      userid: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl = '/dashboard';
    //this.authService.logout();
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }
  get fr() {return this.registerForm.controls; }


  login() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      console.log('the anme is required !!! ');
      return;
    }
    else {
      if (this.f.userid.value != null && this.f.password.value != null) {
        let user = new User();
        user.email = this.f.userid.value;
        user.password = this.f.password.value;
                
        this.http.get(API_URLS.USER_URL + 'authenticate/' + user.email + '&' + user.password).subscribe(user1 => {
          let curruser = new User();
          curruser = user1;
          this.openDialog();
          if (curruser != null ) {
            
            //.authLogin(this.model);
            console.log(' current user :' + curruser.email + "  id = " + curruser._id);
            localStorage.setItem('isLoggedIn', "true");
            localStorage.setItem('token', curruser.email);
            localStorage.setItem('user_id', curruser._id);
            this.router.navigate([this.returnUrl]);
          } else {
            console.log('failed to authenticate !!!!');
            localStorage.setItem('isLoggedIn', "false");
            this.message_loging = "authentication failed !! email or password  is not valid !!";
          }
        });
        //this.http.get(API_URLS.USER_URL+'/authenticate/' + `${user.email}` + '&' + `${user.password}`).subscribe(user1=>{curruser = user1});
        //this.authService.authenticate(user).subscribe(user1=>{curruser = user1});       
      }
      else {
        this.message_loging = "Please check your userid and password";
        localStorage.setItem('isLoggedIn', "false");
      }
    }
  }

  register() {
    if (this.registerForm.invalid) {
      return;
    }
    else {

      let user = new User();
      user.email = this.fr.userid.value;
      user.password = this.fr.password.value;
      user.name = this.fr.name.value;
      console.log(' add user : ' + user.name + " " + user.email);
      this.http.post(API_URLS.USER_URL + 'signUP', user).subscribe(user => {
        let on_user = new User();
        on_user = user;
        if (on_user != null && on_user._id != null) {
          localStorage.setItem('isLoggedIn', "true");
          localStorage.setItem('token', this.f.userid.value);
          localStorage.setItem('user_id', on_user._id);
          this.router.navigate([this.returnUrl]);
          console.log('registration success');
        }
        else {
          console.log(' registration failed ')
          localStorage.setItem('isLoggedIn', "false");
          //this.loading = false;
          localStorage.setItem('isLoggedIn', "false");
          this.message_register = "registeration  failed !! ";
        }
      });

    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '250px',
      
    });
  
    dialogRef.afterClosed().subscribe(result => {
      //this.animal = result;
    });
  }
}








/* import { Component, OnInit, Injectable } from '@angular/core';
import {LoginService} from './login.service';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {User} from '../Shared/user';
import { Router, ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable()
export class LoginComponent implements OnInit {

  users:User[];
  currentUser:User;

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(   private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private loginservice:LoginService) {

  }

loadUsers(){
    this.loginservice.getUsers().subscribe(
      data=>{this.users = data},error => {console.log('an error was occured')},
      () => {console.log('loading produits was done. ')}
    );
}

  ngOnInit() {
   this.loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required]
});
  }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.loginservice.authenticate(new User(this.f.username.value, this.f.password.value))
        .pipe(first())
        .subscribe(
            data => {
              this.currentUser = data;
                this.router.navigate([this.returnUrl]);
            },
            error => {
                //this.alertService.error(error);
                this.loading = false;
            });
}
authenticate(){

 //this.loginservice.authenticate(new User(email, password));

}




}
 */