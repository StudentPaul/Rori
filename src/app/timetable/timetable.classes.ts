/**
 * Created by socio on 5/18/2017.
 */

export class Week {
  number: number;
  days: Day;
}
export class Day {
  name: string;
  lessons: Lesson[];
}
export class Lesson {
  id: number;
  type: string;
  number: number;
  info: Info[];
  teacher: Teacher;
}
export class Teacher {
  id: number;
  name: string;
  fullName: string;
  shortName: string;
}
export class Info {
  content: string;
  color: string;
}
interface Serializable<T> {
  deserialize(input: Object): T;
}

class Member implements Serializable<Member> {
  id: number;

  deserialize(input) {
    this.id = input.id;
    return this;
  }
}

class ExampleClass implements Serializable<ExampleClass> {
  mainId: number;
  firstMember: Member;
  secondMember: Member;

  deserialize(input) {
    this.mainId = input.mainId;

    this.firstMember = new Member().deserialize(input.firstMember);
    this.secondMember = new Member().deserialize(input.secondMember);

    return this;
  }
}

var json = {
  mainId: 42,
  firstMember: {
    id: 1337
  },
  secondMember: {
    id: -1
  }
};
