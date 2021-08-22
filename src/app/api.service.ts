import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = "http://127.0.0.1:8000/student/";


  //httpHeaders = new HttpHeaders({'Content-Type':'application/json'})

  constructor(private http: HttpClient) { }

  getAll() {
    
    return this.http.get(this.baseUrl);
 }
  //getAll(): Observable<any> {
   // return this.http.get(this.baseUrl);
  //}

  //getAll():Observable<any>  {
    //return this.http.get(this.baseurl +'/movies/',{headers : this.httpHeaders});

  //}

}
