import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username : string ="";
  password : string ="";
  show: boolean= false;
  show2:boolean=false;
constructor(private auth:AuthenticationService){}

  submit(){
  if(this.username=='soniya' && this.password=='123')
  {
  //  alert("login successful")
  this.show2=false;
   this.auth.loggedIn();
    this.clear();
// this.router.navigateByUrl('/order');
  }
  else
  {
   this.show2=true;
   this.show=false;
 
  }
  }
  clear(){
  this.username ="";
  this.password = "";
  this.show = true;
  }
  logout()
  {
    // alert("logout successful");
    this.show=false;
    this.auth.loggedOut();
  }
}
