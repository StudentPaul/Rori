/**
 * Created by socio on 5/28/2017.
 */
import { Injectable } from '@angular/core';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ProgressHttpService {

  constructor() { }

  disciplines ={"disciplines":[{"id":1,"name":"Проектний практикум","teacher":{"id":1,"name":"зав.кафедрою Теленик Сергій Федорович"}},{"id":2,"name":"Менеджмент проектів програмного забезпечення","teacher":{"id":1,"name":"зав.кафедрою Теленик Сергій Федорович"}},{"id":3,"name":"Комп'ютеризовані системи управління-2. Інтелектуальні системи управління","teacher":{"id":1,"name":"зав.кафедрою Теленик Сергій Федорович"}}]};

  marks=[{"labs":[{"description":"Л.р. 1","value":9.0,"max":10.0,"date":"6/16/2017","discipline":"Проектн. практ.","time":"08:30:00","isDone":true},{"description":"Л.р. 2","value":0.0,"max":10.0,"date":"6/22/2017","discipline":"Проектн. практ.","time":"08:30:00","isDone":false},{"description":"Л.р. 3","value":0.0,"max":12.0,"date":"6/28/2017","discipline":"Менеджм проектів","time":"10:25:00","isDone":false},{"description":"Л.р. 4","value":0.0,"max":5.0,"date":"7/05/2017","discipline":"Менеджм проектів","time":"10:25:00","isDone":false},{"description":"Л.р. 5","value":0.0,"max":5.0,"date":"7/18/2017","discipline":"Проектн. практ.","time":"08:30:00","isDone":false}]},
    {"labs":[{"description":"Л.р. 1","value":5.0,"max":5.0,"date":"5/24/2017","discipline":"Проектн. практ.","time":"08:30:00","isDone":true},{"description":"Л.р. 2","value":0.0,"max":3.0,"date":"5/17/2017","discipline":"Проектн. практ.","time":"08:30:00","isDone":false},{"description":"Л.р. 3","value":0.0,"max":6.0,"date":"5/17/2017","discipline":"Менеджм проектів","time":"10:25:00","isDone":false},{"description":"Л.р. 4","value":0.0,"max":6.0,"date":"5/17/2017","discipline":"Менеджм проектів","time":"10:25:00","isDone":false},{"description":"Л.р. 5","value":5.0,"max":7.0,"date":"5/17/2017","discipline":"Проектн. практ.","time":"08:30:00","isDone":true}]},
    {"labs":[{"description":"Л.р. 1","value":7.0,"max":7.0,"date":"5/11/2017","discipline":"Проектн. практ.","time":"08:30:00","isDone":true},{"description":"Л.р. 2","value":0.0,"max":7.0,"date":"5/17/2017","discipline":"Проектн. практ.","time":"08:30:00","isDone":false},{"description":"Л.р. 3","value":0.0,"max":7.0,"date":"5/17/2017","discipline":"Менеджм проектів","time":"10:25:00","isDone":false},{"description":"Л.р. 4","value":0.0,"max":7.0,"date":"5/17/2017","discipline":"Менеджм проектів","time":"10:25:00","isDone":false},{"description":"Л.р. 5","value":7.0,"max":7.0,"date":"5/17/2017","discipline":"Проектн. практ.","time":"08:30:00","isDone":true}]}]


  getDisciplines(): Observable<any>{
    return Observable.create(observer=>{
      observer.next({"_body":JSON.stringify(this.disciplines)});
      observer.complete();
    })
  }
  getMarks(id: string): Observable<any>{
    console.log(id);
    id = id.toString();
    return Observable.create(observer=>{
      switch(id) {
        case "1": {
          observer.next({"_body":JSON.stringify(this.marks[0])});
          break;
        }
        case "2": {
          observer.next({"_body":JSON.stringify(this.marks[1])});
          break;
        }
        case "3": {
          observer.next({"_body":JSON.stringify(this.marks[2])});
          break;
        }
        default: {
          observer.next({"_body":JSON.stringify(this.marks[0])});
          break;
        }
      }


      observer.complete();
    })
  }


}
