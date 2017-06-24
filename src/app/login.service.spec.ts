import { TestBed, inject } from '@angular/core/testing';

import { LoginService } from './login.service';
import {LoginHttpService} from "./server-provider/stubs/login-http.service";

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginService, LoginHttpService]
    });
  });

  it('should ...', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
