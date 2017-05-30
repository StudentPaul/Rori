import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Info, Teacher} from '../../../timetable.classes';

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
  @Input() name: string;

  @Output()
  infoRequested:EventEmitter<Info[]> = new EventEmitter();



  constructor() {
  }

  ngOnInit() {
  }
  showInfo() {
    this.infoRequested.emit(this.info);
  }

}
