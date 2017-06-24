import { TestBed, inject } from '@angular/core/testing';

import { TimetableHttpService } from './timetable-http.service';
import {BaseRequestOptions, Http, HttpModule} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe('TimetableHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:  [HttpModule],
      providers: [TimetableHttpService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }]
    });
  });

  it('should ...', inject([TimetableHttpService], (service: TimetableHttpService) => {
    expect(service).toBeTruthy();
  }));
});
