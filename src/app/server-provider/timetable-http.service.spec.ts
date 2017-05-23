import { TestBed, inject } from '@angular/core/testing';

import { TimetableHttpService } from './timetable-http.service';

describe('TimetableHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TimetableHttpService]
    });
  });

  it('should ...', inject([TimetableHttpService], (service: TimetableHttpService) => {
    expect(service).toBeTruthy();
  }));
});
