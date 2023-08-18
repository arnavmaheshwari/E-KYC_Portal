import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DocumentsService {

  private baseUrl = 'http://localhost:3535/documents';

  constructor(private http: HttpClient) { }
  
  documents(data:any){
    const headers = { 'content-type': 'application/json'};
    const Option = {
      headers: new HttpHeaders(headers)
    }

    return this.http.post(`${this.baseUrl}`,data,Option)
    // return this.http.post('http://localhost:3535/documents',data,Option);
  }
}