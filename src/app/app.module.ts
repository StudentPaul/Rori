import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {MdIconModule, MdInputModule, MdSelectModule,
  MdTooltipModule, MdListModule, MdCardModule,
  MdSidenavModule, MdProgressSpinnerModule, MdDialogModule,
  MdButtonModule, MdToolbarModule, MdChipsModule,
  MdSliderModule} from '@angular/material';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent, DialogLogin } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import {DialogInfo, TimetableComponent} from './timetable/timetable.component';
import { CalendarModule } from 'angular-calendar';
import { SettingsComponent } from './settings/settings.component';
import {DemoUtilsModule} from './demo-utils/module';
import { WeekComponent } from './timetable/week/week.component';
import { DayComponent } from './timetable/week/day/day.component';
import { LessonComponent } from './timetable/week/day/lesson/lesson.component';
import { ProgressComponent } from './progress/progress.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    TimetableComponent,
    SettingsComponent,
    DialogLogin,
    DialogInfo,
    WeekComponent,
    DayComponent,
    LessonComponent,
    ProgressComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModalModule.forRoot(),
    MdIconModule, MdInputModule, MdSelectModule,
    MdTooltipModule, MdListModule, MdCardModule,
    MdSidenavModule, MdProgressSpinnerModule, MdDialogModule,
    MdButtonModule, MdToolbarModule, MdChipsModule,
    MdSliderModule,
    AppRoutingModule,
    CalendarModule.forRoot(),
    DemoUtilsModule
  ],
  exports: [
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent, DialogLogin, DialogInfo]
})
export class AppModule { }
