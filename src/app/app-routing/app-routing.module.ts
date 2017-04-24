import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimetableComponent }   from '../timetable/timetable.component';
import { NewsComponent }      from '../news/news.component';

const routes: Routes = [
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  { path: 'timetable',  component: TimetableComponent },
  { path: 'news', component: NewsComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
