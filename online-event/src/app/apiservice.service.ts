import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIserviceService {
  add(arg0: string, login: { userid: any; password: any; type: string; }) {
    throw new Error('Method not implemented.');
  }
  
 
  constructor(private http: HttpClient) { }

  storeData(formData: any) {
    console.log("From api", formData);
    return this.http.post<any>('http://localhost:8000/postdata/', formData)
  }

  storeData1(formData1: any) {
    console.log("From api", formData1);
    return this.http.post<any>('http://localhost:8000/postdata1/', formData1)
  }

  storeData2(formData2: any) {
    console.log("From api", formData2);
    return this.http.post<any>('http://localhost:8000/postdata2/', formData2)
  }

  // getdata(userid: any) {
  //   return this.http.get(`http://localhost:8000/get_all_query/${userid}`);
  // }
 
}