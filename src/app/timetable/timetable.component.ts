import { Component, OnInit } from '@angular/core';
import {Week} from "./timetable.classes";

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {

  firstWeek: Week;
  secondWeek: Week;
  constructor() {

  }

  ngOnInit() {
  }

}
