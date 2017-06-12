import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions}       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TimeHttpService {

  constructor(private http: Http) { }
  someDate = "2017-06-22T20:57:16.0482368+00:00";

  getCurrent(): Observable<any>{
    return Observable.create(observer=>{
      observer.next({"_body":this.someDate});
      console.log('time received');

      observer.complete();
    })

  }

}
