import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {MdIconModule} from '@angular/material';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent, DialogLogin } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimetableComponent } from './timetable/timetable.component';
import { NewsComponent } from './news/news.component';
import { CalendarModule } from 'angular-calendar';
import { SettingsComponent } from './settings/settings.component';
import {DemoUtilsModule} from './demo-utils/module';
import { WeekComponent } from './timetable/week/week.component';
import { DayComponent } from './timetable/week/day/day.component';
import { LessonComponent } from './timetable/week/day/lesson/lesson.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    TimetableComponent,
    NewsComponent,
    SettingsComponent,
    DialogLogin,
    WeekComponent,
    DayComponent,
    LessonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    NgbModalModule.forRoot(),
    MdIconModule,
    AppRoutingModule,
    CalendarModule.forRoot(),
    DemoUtilsModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent,DialogLogin]
})
export class AppModule { }
