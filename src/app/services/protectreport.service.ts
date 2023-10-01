import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class ProtectreportService implements CanActivate {

  constructor(private ser:AuthenticationService,private r:Router) { }
  canActivate(    route: ActivatedRouteSnapshot,    state: RouterStateSnapshot    ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    const b=this.ser.getloggedstatus()
    if(b==true)
    {
      // this.r.navigateByUrl('/report');
      return b ;
    }
    else{
      this.r.navigateByUrl('/login');
      return b ;
    }
    }
}
