import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  url = 'http://carteleramardelplata2.com.ar/api/v1/';
  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    })
  };
  constructor(
    private http: HttpClient
  ) { }

  login(data) {
    return this.http.post(this.url+'account/login', data, this.httpOptions)
  }
}
