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
  info =[{"content":"Відбудеться перевірка знань на 15 хвилин за темою минулої пари","date":"2017-06-17T00:00:00","color":"#FFFF00","lesson":"Проектн. практ."},{"content":"Заняття переноситься на 27.06 о 10:25 ауд. 309","date":"2017-06-17T00:00:00","color":"#FF0000","lesson":"Менеджм проектів"},{"content":"Виконати лабораторну роботу 3","date":"2017-06-17T00:00:00","color":"#008000","lesson":"Проектн. практ."},{"content":"Lesson info 4","date":"2017-06-14T00:00:00","color":"#FFFF00","lesson":"Інт. СУ"},{"content":"Info to lesson for testing","date":"2017-06-12T00:00:00","color":"#FF0000","lesson":"Проектн. практ."}];

  getCurrent(): Observable<any>{
    return Observable.create(observer=>{
      observer.next({"_body":JSON.stringify(this.info)});
      observer.complete();
    })
  }


}
