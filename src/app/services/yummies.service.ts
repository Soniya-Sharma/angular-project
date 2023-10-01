import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MyYummies } from '../Model/MyYummies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YummiesService {

  constructor(private http: HttpClient) { }
  url = "http://localhost:3010/yummy";
  getAllYummies() :Observable<MyYummies[]>
  {
    return this.http.get<MyYummies[]>(this.url);
  }
  
}
