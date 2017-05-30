import { Component, OnInit, Input ,Output , EventEmitter} from '@angular/core';
import { Lesson, Info } from '../../timetable.classes'

@Component({
  selector: 'timetable-day',
  templateUrl: 'day.component.html',
  styleUrls: ['day.component.css']
})
export class DayComponent implements OnInit {

  @Input() name: string;
  @Input() lessons: Lesson[];
  @Output()
  infoRequested:EventEmitter<Info[]> = new EventEmitter();

  constructor() {

  }

  ngOnInit() {
  }
  showInfo(info){
    this.infoRequested.emit(info);
  }

}
