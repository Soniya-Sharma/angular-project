import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateService {

  constructor() { }

  getSquare(n:any):any{
    return n*n;
  }
  getaddition(n1:number,n2:number):number{
    return (n1+n2);
  }
}
