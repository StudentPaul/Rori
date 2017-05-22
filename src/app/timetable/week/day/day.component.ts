import { Component, OnInit, Input } from '@angular/core';
import { Lesson } from '../../timetable.classes'

@Component({
  selector: 'timetable-day',
  templateUrl: 'day.component.html',
  styleUrls: ['day.component.css']
})
export class DayComponent implements OnInit {

  @Input() name: string;
  @Input() lessons: Lesson[];

  constructor() {

  }

  ngOnInit() {
  }

}
