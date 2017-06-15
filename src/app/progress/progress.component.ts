import { Component, OnInit } from '@angular/core';
import {ProgressHttpService} from "../server-provider/stubs/progress-http.service";
import {Discipline} from "./progress.classes";
import {TimeHttpService} from "../server-provider/stubs/time-http.service";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  providers: [ProgressHttpService, TimeHttpService],
})
export class ProgressComponent implements OnInit {

  constructor(private progressHttp: ProgressHttpService, private timeHttp: TimeHttpService) { }

  disciplines: Discipline[] = [];
  waiting: boolean = true;
  currentTime: Date;
  color = 'primary';
  mode = 'determinate';
  value = 30;

  fetchCurrentTime() {
    return this.timeHttp.getCurrent().subscribe(
      data=>{
        console.log(data._body);
        this.currentTime = new Date(data._body.split('T')[0]);
        console.log('server time: '+this.currentTime);
        this.fetchDisciplines();
      },
      error=>{
        this.currentTime = new Date();
        console.log('local time: '+this.currentTime);
        this.fetchDisciplines();
      });
  }
  fetchDisciplines () {
    return this.progressHttp.getDisciplines().subscribe(
      data =>{
        let disciplines = JSON.parse(data._body) ;
        console.log(disciplines);
        disciplines = disciplines.disciplines;
        disciplines.map( (disc)=> {
          this.progressHttp.getMarks(disc.id).subscribe(
            data=>{
              console.log(data);
              let marks = JSON.parse(data._body) ;
              console.log(marks);
              var newDiscipline = new Discipline().deserialize(disc, marks.labs);
              newDiscipline.marks.map(mark=>{
                var dateArray = mark.date.split('/');
                console.log(dateArray);
                var markDate = new Date(parseInt(dateArray[2]),parseInt(dateArray[0])-1,parseInt(dateArray[1]));
                console.log(markDate);
                var timeDiff = markDate.getTime() - this.currentTime.getTime();
                var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
                mark.deadline = diffDays;

                return mark;
              });
              this.disciplines.push(newDiscipline);

              return marks
            },
            error => {
              alert('error while getting marks for '+disc.name);

              return error;
            }
          );

        });
        this.waiting = false;

        return disciplines
      },
      error => {
        alert('error while fetching disciplines for calendar');
        return error;
      });
  }
  ngOnInit() {
    this.fetchCurrentTime();
  }

}
