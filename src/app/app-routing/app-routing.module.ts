import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CalendarComponent }   from '../calendar/calendar.component';
import { TimetableComponent }   from '../timetable/timetable.component';
import { NewsComponent }      from '../news/news.component';
import {SettingsComponent} from "../settings/settings.component";
import {ProgressComponent} from "../progress/progress.component";

const routes: Routes = [
  { path: '', redirectTo: '/timetable', pathMatch: 'full' },
  { path: 'calendar',  component: CalendarComponent },
  { path: 'timetable',  component: TimetableComponent },
  { path: 'news', component: NewsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'progress', component: ProgressComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
