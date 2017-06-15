import { async, ComponentFixture, TestBed,  } from '@angular/core/testing';

import { ProgressComponent } from './progress.component';
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {MaterialModule, MdTooltip, OVERLAY_PROVIDERS} from "@angular/material";
import {TimeHttpService} from "../server-provider/stubs/time-http.service";
import {ProgressHttpService} from "../server-provider/stubs/progress-http.service";

describe('ProgressComponent', () => {
  let component: ProgressComponent;
  let fixture: ComponentFixture<ProgressComponent>;



  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule.forRoot() ],
      declarations: [ ProgressComponent],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
      providers:    [OVERLAY_PROVIDERS,
        {provide: TimeHttpService, useValue: new TimeHttpService() },
        {provide: ProgressHttpService, useValue: new ProgressHttpService() }]


    })
      .compileComponents();
  }));

  beforeEach(() => {

    fixture = TestBed.createComponent(ProgressComponent)
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('true is true', () => expect(true).toBe(true));
});
