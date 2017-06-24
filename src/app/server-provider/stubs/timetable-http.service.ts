import { Injectable } from '@angular/core';
import { Http , Headers, RequestOptions}       from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class TimetableHttpService {

  constructor(private http: Http) { }

  json = {
    "day": "четвер",
    "week": 2,
    "weeks": [
      {
        "week": 1,
        "days": [
          {
            "day": "Понеділок",
            "lessons": []
          },
          {
            "day": "Вівторок",
            "lessons": [
              {
                "teacher": {
                  "teacherId": 1,
                  "teacherName": "Теленик Сергій Федорович",
                  "teacherFullName": "зав.кафедрою Теленик Сергій Федорович",
                  "teacherShortName": "зав.каф. Теленик С. Ф."
                },
                "id": 29,
                "type": "лек.",
                "name": "Проектний практикум",
                "number": 1,
                "info": [
                  {
                    "content": "Відбудеться контроль знань на 15 хв.",
                    "color": "#FFFF00"
                  },
                  {
                    "content": "Заняття відбудеться в 418 аудиторії",
                    "color": "#FFFF00"
                  },
                  {
                    "content": "Старості групи: прохання зв'язатись зі мною",
                    "color": "#008000"
                  }
                  ]
              },
              {
                "teacher": {
                  "teacherId": 1,
                  "teacherName": "Теленик Сергій Федорович",
                  "teacherFullName": "зав.кафедрою Теленик Сергій Федорович",
                  "teacherShortName": "зав.каф. Теленик С. Ф."
                },
                "id": 35,
                "type": "лек.",
                "name": "Проектний практикум",
                "number": 2,
                "info": []
              },
              {
                "teacher": {
                  "teacherId": 1,
                  "teacherName": "Теленик Сергій Федорович",
                  "teacherFullName": "зав.кафедрою Теленик Сергій Федорович",
                  "teacherShortName": "зав.каф. Теленик С. Ф."
                },
                "id": 30,
                "type": "лаб.",
                "name": "Менеджмент проектів програмного забезпечення",
                "number": 3,
                "info": [
                  {
                    "content": "Lesson info 2",
                    "color": "#FF0000"
                  }
                  ]
              },
              {
                "teacher": {
                  "teacherId": 1,
                  "teacherName": "Теленик Сергій Федорович",
                  "teacherFullName": "зав.кафедрою Теленик Сергій Федорович",
                  "teacherShortName": "зав.каф. Теленик С. Ф."
                },
                "id": 36,
                "type": "лаб.",
                "name": "Менеджмент проектів програмного забезпечення",
                "number": 4,
                "info": []
              },
              {
                "teacher": {
                  "teacherId": 1,
                  "teacherName": "Теленик Сергій Федорович",
                  "teacherFullName": "зав.кафедрою Теленик Сергій Федорович",
                  "teacherShortName": "зав.каф. Теленик С. Ф."
                },
                "id": 31,
                "type": "лек.",
                "name": "Комп'ютеризовані системи управління-2. Інтелектуальні системи управління",
                "number": 5,
                "info": [
                  {
                    "content": "Lesson info 4",
                    "color": "#FFFF00"
                  }
                  ]
              },
              {
                "teacher": {
                  "teacherId": 1,
                  "teacherName": "Теленик Сергій Федорович",
                  "teacherFullName": "зав.кафедрою Теленик Сергій Федорович",
                  "teacherShortName": "зав.каф. Теленик С. Ф."
                },
                "id": 37,
                "type": "лек.",
                "name": "Комп'ютеризовані системи управління-2. Інтелектуальні системи управління",
                "number": 6,
                "info": []
              }
              ]
          },
          {
            "day": "Середа",
            "lessons": [
              {
                "teacher": {
                  "teacherId": 1,
                  "teacherName": "Теленик Сергій Федорович",
                  "teacherFullName": "зав.кафедрою Теленик Сергій Федорович",
                  "teacherShortName": "зав.каф. Теленик С. Ф."
                },
                "id": 32,
                "type": "лаб.",
                "name": "Проектний практикум",
                "number": 1,
                "info": []
              },
              {
                "teacher": {
                  "teacherId": 1,
                  "teacherName": "Теленик Сергій Федорович",
                  "teacherFullName": "зав.кафедрою Теленик Сергій Федорович",
                  "teacherShortName": "зав.каф. Теленик С. Ф."
                },
                "id": 38,
                "type": "лаб.",
                "name": "Проектний практикум",
                "number": 2,
                "info": []
              }
              ]
          },
          {
            "day": "Четвер",
            "lessons": []
          },
          {
            "day": "П'ятниця",
            "lessons": []
          },
          {
            "day": "Субота",
            "lessons": []
          },
          {
            "day": "Неділя",
            "lessons": []
          }
          ]
      },
      {
        "week": 2,
        "days": [
          {
            "day": "Понеділок",
            "lessons": []
          },
          {
            "day": "Вівторок",
            "lessons": []
          },
          {
            "day": "Середа",
            "lessons": [
              {
                "teacher": {
                  "teacherId": 1,
                  "teacherName": "Теленик Сергій Федорович",
                  "teacherFullName": "зав.кафедрою Теленик Сергій Федорович",
                  "teacherShortName": "зав.каф. Теленик С. Ф."
                },
                "id": 33,
                "type": "лаб.",
                "name": "Менеджмент проектів програмного забезпечення",
                "number": 1,
                "info": []
              },
              {
                "teacher": {
                  "teacherId": 1,
                  "teacherName": "Теленик Сергій Федорович",
                  "teacherFullName": "зав.кафедрою Теленик Сергій Федорович",
                  "teacherShortName": "зав.каф. Теленик С. Ф."
                },
                "id": 39,
                "type": "лаб.",
                "name": "Менеджмент проектів програмного забезпечення",
                "number": 2,
                "info": []
              },
              {
                "teacher": {
                  "teacherId": 1,
                  "teacherName": "Теленик Сергій Федорович",
                  "teacherFullName": "зав.кафедрою Теленик Сергій Федорович",
                  "teacherShortName": "зав.каф. Теленик С. Ф."
                },
                "id": 34,
                "type": "лек.",
                "name": "Комп'ютеризовані системи управління-2. Інтелектуальні системи управління",
                "number": 3,
                "info": []
              },
              {
                "teacher": {
                  "teacherId": 1,
                  "teacherName": "Теленик Сергій Федорович",
                  "teacherFullName": "зав.кафедрою Теленик Сергій Федорович",
                  "teacherShortName": "зав.каф. Теленик С. Ф."
                },
                "id": 40,
                "type": "лек.",
                "name": "Комп'ютеризовані системи управління-2. Інтелектуальні системи управління",
                "number": 3,
                "info": []
              }
              ]
          },
          {
            "day": "Четвер",
            "lessons": []
          },
          {
            "day": "П'ятниця",
            "lessons": []
          },
          {
            "day": "Субота",
            "lessons": []
          },
          {
            "day": "Неділя",
            "lessons": []
          }
          ]
      }
      ]
};

  getCurrent(): Observable<any>{
    return Observable.create(observer=>{
      observer.next({"_body":JSON.stringify(this.json)});
      observer.complete();
    })

  }


}
