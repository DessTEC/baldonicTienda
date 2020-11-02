import { TestBed } from '@angular/core/testing';

import { LogIn } from './logIn.service';

describe('AuthService', () => {
  let service: LogIn;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LogIn);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
