import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  search(data:any){
    const headers = { 'content-type': 'application/json'};
    const Option = {
      headers: new HttpHeaders(headers)
    }
  
    return this.http.post('http://localhost:3535/searched',data,Option);
  }
}
