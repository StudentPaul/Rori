import { TestBed, inject } from '@angular/core/testing';

import { TimeHttpService } from './time-http.service';

describe('TimeHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimeHttpService]
    });
  });

  it('should ...', inject([TimeHttpService], (service: TimeHttpService) => {
    expect(service).toBeTruthy();
  }));
});
