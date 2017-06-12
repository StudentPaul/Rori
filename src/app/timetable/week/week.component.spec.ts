import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekComponent } from './week.component';
import {MaterialModule} from "@angular/material";
import {DayComponent} from './day/day.component';

describe('WeekComponent', () => {
  let component: WeekComponent;
  let fixture: ComponentFixture<WeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule.forRoot() ],
      declarations: [ WeekComponent, DayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
