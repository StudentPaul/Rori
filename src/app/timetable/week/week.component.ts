import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Day, Info} from '../timetable.classes';

@Component({
  selector: 'timetable-week',
  templateUrl: 'week.component.html',
  styleUrls: ['week.component.css']
})
export class WeekComponent implements OnInit {

  @Input() number: number;
  @Input() days: Day[];
  @Output()
  infoRequested:EventEmitter<Info[]> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  showInfo(info){
    this.infoRequested.emit(info);
  }


}
