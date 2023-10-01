import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  loggedstatus=false;
  loggedIn(){
    this.loggedstatus=true;
  }
  loggedOut(){
    this.loggedstatus=false;
  }
  getloggedstatus(){
    return this.loggedstatus;
  }
}
