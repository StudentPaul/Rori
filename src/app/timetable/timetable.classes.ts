/**
 * Created by socio on 5/18/2017.
 */
interface Serializable<T> {
  deserialize(input: Object): T;
}

export class Week implements Serializable<Week> {
  number: number;
  days: Day[];

  deserialize(input) {
    this.number = input.week;
    this.days = input.days.map(function (item) {
      return new Day().deserialize(item);
    });
    return this;
  }
}
export class Day implements Serializable<Day>{
  name: string;
  lessons: Lesson[];

  deserialize(input) {
    this.name = input.day;
    this.lessons = input.lessons.map(function (item) {
      return new Lesson().deserialize(item);
    });
    return this;
  }
}
export class Lesson implements Serializable<Lesson>{
  id: number;
  type: string;
  name: string;
  number: number;
  info: Info[];
  teacher: Teacher;

  deserialize(input) {
    this.id = input.id;
    this.type = input.type;
    this.number = input.number;
    this.name = input.name;
    this.teacher = new Teacher().deserialize(input.teacher);
    this.info = input.info.map(function (item) {
      return new Info().deserialize(item);
    });

    return this;
  }
}
export class Teacher implements Serializable<Teacher>{
  id: number;
  name: string;
  fullName: string;
  shortName: string;

  deserialize(input) {
    this.id = input.teacherId||0;
    this.name = input.teacherName||"";
    this.fullName = input.teacherFullName||"";
    this.shortName = input.teacherShortName||"";

    return this;
  }
}
export class Info implements Serializable<Info>{
  content: string;
  color: string;

  deserialize(input) {
    this.content = input.content;
    this.color = input.color;
    return this;
  }
}



export var json = {
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
                  "content": "Lesson info 1",
                  "color": "#FFFF00"
                },
                {
                  "content": "Lesson info 1",
                  "color": "#FFFF00"
                },
                {
                  "content": "Lesson info 3",
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
              "id": 30,
              "type": "лаб.",
              "name": "Менеджмент проектів програмного забезпечення",
              "number": 2,
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
              "id": 31,
              "type": "лек.",
              "name": "Комп'ютеризовані системи управління-2. Інтелектуальні системи управління",
              "number": 3,
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
              "number": 3,
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
              "number": 1,
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
              "id": 34,
              "type": "лек.",
              "name": "Комп'ютеризовані системи управління-2. Інтелектуальні системи управління",
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
              "id": 40,
              "type": "лек.",
              "name": "Комп'ютеризовані системи управління-2. Інтелектуальні системи управління",
              "number": 4,
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
