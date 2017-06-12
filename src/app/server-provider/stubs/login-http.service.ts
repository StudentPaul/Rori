import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions}       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class LoginHttpService {

  constructor(private http: Http) { }


  getToken(email: string, password: string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'text/plain' });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post(`http://pinkieshy.apphb.com/Token`,'grant_type=password&username='+email+'&password='+password,options)
      .map(response => response.json());
  }
  logout(): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'text/plain', 'Authorization': localStorage.getItem('Authorization') });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .post('http://pinkieshy.apphb.com/api/Account/Logout','',options)
  }

}
