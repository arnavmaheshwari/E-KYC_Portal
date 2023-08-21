import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

   private baseUrl = 'http://localhost:3535/log_in';

  constructor(private http: HttpClient) { }

  login(data:any){
    const headers = { 'content-type': 'application/json'};
    const Option = {
      headers: new HttpHeaders(headers)
    }  
    
    return this.http.post(`${this.baseUrl}`,data,Option)
    // return this.http.post('http://localhost:3535/logged',data,Option);
  }
}

// ng g s login: This command will generate a login service in the login folder.
//We generally make different functions in the same service.ts file to navigate to different routes, rather than creating different services.ts files

