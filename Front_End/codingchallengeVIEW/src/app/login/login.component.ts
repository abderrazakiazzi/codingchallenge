import { Component, OnInit, Injectable } from '@angular/core';
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
