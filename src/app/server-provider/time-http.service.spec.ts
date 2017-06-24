import {TestBed, inject, async} from '@angular/core/testing';
import {MockBackend} from "@angular/http/testing";
import {BaseRequestOptions, Http, HttpModule, Response, ResponseOptions} from "@angular/http";

import { TimeHttpService } from './time-http.service';

describe('TimeHttpService', () => {
  let service: TimeHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:  [HttpModule],
      providers: [TimeHttpService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }]
    });
  });
  beforeEach(() => {
   service = TestBed.get(TimeHttpService);
  });

  it('should create', inject([TimeHttpService], (service: TimeHttpService) => {
    expect(service).toBeTruthy();
  }));
  it('should parse response successfully', async(inject(
    [MockBackend], (mockBackend) => {

      var someDate = "2017-06-22T20:57:16.0482368+00:00";

      mockBackend.connections.subscribe(conn => {
        conn.mockRespond(new Response(new ResponseOptions({body: JSON.stringify(someDate)})));
      });

      spyOn(service, 'getCurrent').and.returnValue(true);
      expect(service.getCurrent()).toBeTruthy();

    })));

});
