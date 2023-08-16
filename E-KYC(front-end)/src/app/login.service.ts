import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private baseUrl = 'http://localhost:3535/data';

  constructor(private http: HttpClient) { }

  // getData(): Observable<any[]> {
  //   return this.http.get<any[]>(`${this.baseUrl}`);
  // }

  login(data:any){
    const headers = { 'content-type': 'application/json'};
    const Option = {
      headers: new HttpHeaders(headers)
    }  
    
    return this.http.post('http://localhost:3535/logged',data,Option);
  }
}
