/**
 * Created by socio on 5/28/2017.
 */
import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions}       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProgressHttpService {

  constructor(private http: Http) { }

  getDisciplines(): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('Authorization') });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .get('http://pinkieshy.apphb.com/api/disciplines',options);
  }
  getMarks(id: string): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json', 'Authorization': localStorage.getItem('Authorization') });
    let options = new RequestOptions({ headers: headers });
    return this.http
      .get('http://pinkieshy.apphb.com/api/Marks/'+id,options);
  }


}
