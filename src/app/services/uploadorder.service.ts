import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../Model/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadorderService {

  constructor(private http:HttpClient) { }

  url="http://localhost:3020/yumorder";

  uploadOrder(data:Order):Observable<Order>
  {
    return this.http.post<Order>(this.url, data);
  }

  getOrderDetails():Observable<Order[]>
  {
    return this.http.get<Order[]>(this.url);
  }
}
