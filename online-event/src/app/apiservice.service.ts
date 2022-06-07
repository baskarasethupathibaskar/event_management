import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIserviceService {
  constructor(private http: HttpClient) { }

  storeData(formData: any) {
    console.log("From api", formData);
    return this.http.post<any>('http://localhost:8000/register/', formData)
  }

  storeData1(formData1: any) {
    console.log("From api", formData1);
    return this.http.post<any>('http://localhost:8000/bookingevent/', formData1)
  }

  storeData2(formData2: any) {
    console.log("From api", formData2);
    return this.http.post<any>('http://localhost:8000/adminlogin/', formData2)
  }
}