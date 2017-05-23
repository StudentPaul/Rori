import { Component, OnInit } from '@angular/core';
import {Week, json} from "./timetable.classes";
import {TimetableHttpService} from "../server-provider/timetable-http.service";


@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css'],
  providers: [TimetableHttpService]
})
export class TimetableComponent implements OnInit {

  firstWeek: Week;
  secondWeek: Week;
  currentWeek: number;
  currentDay: string;

  constructor( private timetableHttp: TimetableHttpService) {

  }

  ngOnInit() {

    this.fetchTimetable();
  }
  fetchTimetable () {
    return this.timetableHttp.getCurrent().subscribe(
      data =>{
        this.firstWeek = new Week().deserialize(data.weeks[0]);
        this.secondWeek = new Week().deserialize(data.weeks[1]);
        this.currentDay = data.day;
        this.currentWeek = data.week;
        return data
      },
      error => {
        this.firstWeek = new Week().deserialize(json.weeks[0]);
        this.secondWeek = new Week().deserialize(json.weeks[1]);
        this.currentDay = json.day;
        this.currentWeek = json.week;
        return error;
      });
  }

}
