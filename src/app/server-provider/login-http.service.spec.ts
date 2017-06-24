import { TestBed, inject } from '@angular/core/testing';

import { LoginHttpService } from './login-http.service';
import {BaseRequestOptions, Http, HttpModule} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe('LoginHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:  [HttpModule],
      providers: [LoginHttpService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http,
          useFactory: (backend, options) => new Http(backend, options),
          deps: [MockBackend, BaseRequestOptions]
        }]
    });
  });

  it('should ...', inject([LoginHttpService], (service: LoginHttpService) => {
    expect(service).toBeTruthy();
  }));
});
