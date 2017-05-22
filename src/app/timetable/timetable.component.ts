import { Component, OnInit } from '@angular/core';
import {Week, json} from "./timetable.classes";


@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  firstWeek: Week;
  secondWeek: Week;
  currentWeek: number;
  currentDay: string;

  constructor() {
    this.firstWeek = new Week().deserialize(json.weeks[0]);
    this.secondWeek = new Week().deserialize(json.weeks[1]);
    this.currentDay = json.day;
    this.currentWeek = json.week;
  }

  ngOnInit() {

  }

}
