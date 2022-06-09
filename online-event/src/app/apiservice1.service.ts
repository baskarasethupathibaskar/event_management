import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Apiservice1Service {
  loginShow:boolean=false;
  show:boolean=true;

  url='https://97233c10-e8bd-4684-98ca-20e5eaf8dd35-bluemix.cloudantnosqldb.appdomain.cloud/'
  dbUserName='apikey-v2-msz5pn0gamsoigpftay3cndoju75rdeejvo1cd3paw0'
  dbPassword = '1cd6b51776516316358ce28da3097318'
   basicAuth = 'Basic ' + btoa(this.dbUserName + ':' + this.dbPassword);
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': this.basicAuth
    })
  };

  add(db: string, doc: object): Observable<{}> {
    const url = this.url + db;
    return this.http.post(url, doc, this.httpOptions)
  }
 
  get(data:any): Observable<{}> {
    const url = this.url +'online_management/_find';
    return this.http.post( url,data, this.httpOptions)

  }

  getDocsByID(db: string,id: string): Observable<{}> {
    const url = this.url + db + '/'+id;
    return this.http.get(url, this.httpOptions)
  }
  deleteData(id: any, rev: any): Observable<{}> {
    const urld = this.url + 'pay/' + id + '/?rev=' + rev;
    return this.http.delete(urld, this.httpOptions);
  }
  showoff(){
    this.loginShow=!this.loginShow;
  
    this.show=!this.show;
  }

}
