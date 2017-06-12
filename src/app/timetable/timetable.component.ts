import { Component, OnInit } from '@angular/core';
import {Week, json, Info} from "./timetable.classes";
import {TimetableHttpService} from "../server-provider/stubs/timetable-http.service";
import {MdDialog, MdDialogConfig, MdDialogRef} from "@angular/material";


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

  constructor(public dialog: MdDialog, private timetableHttp: TimetableHttpService) {

  }

  ngOnInit() {
    this.fetchTimetable();
  }
  fetchTimetable () {
    return this.timetableHttp.getCurrent().subscribe(
      data =>{
        let obj = JSON.parse(data._body) ;
        this.firstWeek = new Week().deserialize(obj.weeks[0]);
        this.secondWeek = new Week().deserialize(obj.weeks[1]);
        this.currentDay = obj.day;
        this.currentWeek = obj.week;
        return obj
      },
      error => {
        // this.firstWeek = new Week().deserialize(json.weeks[0]);
        // this.secondWeek = new Week().deserialize(json.weeks[1]);
        // this.currentDay = json.day;
        // this.currentWeek = json.week;
        alert(error);
        return error;
      });
  }
  openInfoDialog(info: Info[]){

    let config = new MdDialogConfig();
    let dialogRef = this.dialog.open(DialogInfo, config);
    dialogRef.componentInstance.info = info;
    dialogRef.afterClosed().subscribe(result => {
      if(result === 'success'){

      }
    });

  }

}

@Component({
  selector: 'dialog-info',
  templateUrl: 'dialog-info.html',
  styleUrls: ['./dialog-info.css'],
  providers: []
})
export class DialogInfo {
  constructor(public dialogRef: MdDialogRef<DialogInfo>) {

  }
  info: Info[];





}
