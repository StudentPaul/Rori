import { Component, OnInit } from '@angular/core';
import {ProgressHttpService} from "../server-provider/progress-http.service";
import {Discipline} from "./progress.classes";

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css'],
  providers: [ProgressHttpService]
})
export class ProgressComponent implements OnInit {

  constructor(private progressHttp: ProgressHttpService) { }

  disciplines: Discipline[] = [];
  waiting: boolean = true;

  fetchDisciplines () {
    return this.progressHttp.getDisciplines().subscribe(
      data =>{
        let disciplines = JSON.parse(data._body) ;
        disciplines = disciplines.disciplines;
        disciplines.map( (disc)=> {
          this.progressHttp.getMarks(disc.id).subscribe(
            data=>{
              let marks = JSON.parse(data._body) ;
              this.disciplines.push(new Discipline().deserialize(disc, marks.labs))

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
    this.fetchDisciplines();
  }

}
