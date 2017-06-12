/**
 * Created by socio on 5/28/2017.
 */
import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions}       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CalendarHttpService {

  constructor(private http: Http) { }

  getCurrent(): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('Authorization') });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .get('http://pinkieshy.apphb.com/api/Info',options);
  }


}
