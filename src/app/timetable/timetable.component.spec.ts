import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from "@angular/material";

import { TimetableComponent } from './timetable.component';

import { WeekComponent } from './week/week.component';
import {DayComponent} from './week/day/day.component';
import {LessonComponent} from './week/day/lesson/lesson.component';

describe('TimetableComponent', () => {
  let component: TimetableComponent;
  let fixture: ComponentFixture<TimetableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule.forRoot(),BrowserAnimationsModule ],
      declarations: [ TimetableComponent, DayComponent, WeekComponent, LessonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimetableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
