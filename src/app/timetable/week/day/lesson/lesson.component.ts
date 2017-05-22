import { Component, OnInit, Input } from '@angular/core';
import {Info} from './lessonInfo'
import {Teacher} from "./teacher";

@Component({
  selector: 'timetable-lesson',
  templateUrl: 'lesson.component.html',
  styleUrls: ['lesson.component.css']
})
export class LessonComponent implements OnInit {

  @Input() id: number;
  @Input() type: string;
  @Input() number: number;
  @Input() info: Info[];
  @Input() teacher: Teacher;

  constructor() {
  }

  ngOnInit() {
  }

}
