import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '@angular/material';
import {MdIconModule} from '@angular/material';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent, DialogLogin } from './app.component';
import { TimetableComponent } from './timetable/timetable.component';
import { NewsComponent } from './news/news.component';
import { CalendarModule } from 'angular-calendar';
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    TimetableComponent,
    NewsComponent,
    SettingsComponent,
    DialogLogin
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot(),
    MdIconModule,
    AppRoutingModule,
    CalendarModule.forRoot()
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent,DialogLogin]
})
export class AppModule { }
