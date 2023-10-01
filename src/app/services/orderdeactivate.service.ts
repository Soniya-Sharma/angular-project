import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { OrderyummyComponent } from '../orderyummy/orderyummy.component';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderdeactivateService implements CanDeactivate<OrderyummyComponent>{

  
  canDeactivate(
    component: OrderyummyComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
    ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    return component.canExit();
    }
}
