import { Component, OnInit, Input } from '@angular/core';
import { Day } from './day/day';

@Component({
  selector: 'timetable-week',
  templateUrl: 'week.component.html',
  styleUrls: ['week.component.css']
})
export class WeekComponent implements OnInit {

  @Input() number: number;
  @Input() days: Day[];

  constructor() { }

  ngOnInit() {
  }

}
