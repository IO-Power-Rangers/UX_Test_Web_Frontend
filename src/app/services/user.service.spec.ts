import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import { CommonTestModule } from '../common-test/common-test.module';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CommonTestModule],
    });
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
