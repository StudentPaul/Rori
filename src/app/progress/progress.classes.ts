/**
 * Created by socio on 5/18/2017.
 */
import {Teacher} from "../timetable/timetable.classes"
interface Serializable<T> {
  deserialize(input: Object, optional?: Object): T;
}

export class Discipline implements Serializable<Discipline> {
  id: number;
  name: string;
  teacher: Teacher;
  marks: Mark[];

  deserialize(discipline, marks) {
    this.id = discipline.id||0;
    this.name = discipline.name||"";
    this.teacher = new Teacher().deserialize(discipline.teacher);

    marks.map(function (item) {
      return new Mark().deserialize(item);
    });
    this.marks = marks;

    return this;
  }
}
export class Mark implements Serializable<Mark>{
  description: string;
  value: number;
  max: number;
  date: Date;
  discipline: string;
  time: string;
  isDone: boolean;

  deserialize(input) {
    this.description = input.description||"";
    this.value = input.value||0;
    this.max = input.max||0;
    this.date = new Date(input.date);
    this.discipline = input.discipline||"";
    this.time = input.time||"";
    this.isDone = input.isDone||false;

    return this;
  }
}
